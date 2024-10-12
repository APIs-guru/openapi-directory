# openapi_client.TerraintilesApi

All URIs are relative to *https://vectortile.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vectortile_terraintiles_get**](TerraintilesApi.md#vectortile_terraintiles_get) | **GET** /v1/{name} | 


# **vectortile_terraintiles_get**
> TerrainTile vectortile_terraintiles_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, altitude_precision_centimeters=altitude_precision_centimeters, client_info_api_client=client_info_api_client, client_info_application_id=client_info_application_id, client_info_application_version=client_info_application_version, client_info_device_model=client_info_device_model, client_info_operating_system=client_info_operating_system, client_info_platform=client_info_platform, client_info_user_id=client_info_user_id, max_elevation_resolution_cells=max_elevation_resolution_cells, min_elevation_resolution_cells=min_elevation_resolution_cells, terrain_formats=terrain_formats, enable_modeled_volumes=enable_modeled_volumes, enable_political_features=enable_political_features, enable_private_roads=enable_private_roads, enable_unclipped_buildings=enable_unclipped_buildings, language_code=language_code, region_code=region_code)



Gets a terrain tile by its tile resource name.

### Example


```python
import openapi_client
from openapi_client.models.terrain_tile import TerrainTile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://vectortile.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://vectortile.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TerraintilesApi(api_client)
    name = 'name_example' # str | Required. Resource name of the tile. The tile resource name is prefixed by its collection ID `terraintiles/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `terraintiles/@1,2,3z`.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    altitude_precision_centimeters = 56 # int | The precision of terrain altitudes in centimeters. Possible values: between 1 (cm level precision) and 1,000,000 (10-kilometer level precision). (optional)
    client_info_api_client = 'client_info_api_client_example' # str | API client name and version. For example, the SDK calling the API. The exact format is up to the client. (optional)
    client_info_application_id = 'client_info_application_id_example' # str | Application ID, such as the package name on Android and the bundle identifier on iOS platforms. (optional)
    client_info_application_version = 'client_info_application_version_example' # str | Application version number, such as \"1.2.3\". The exact format is application-dependent. (optional)
    client_info_device_model = 'client_info_device_model_example' # str | Device model as reported by the device. The exact format is platform-dependent. (optional)
    client_info_operating_system = 'client_info_operating_system_example' # str | Operating system name and version as reported by the OS. For example, \"Mac OS X 10.10.4\". The exact format is platform-dependent. (optional)
    client_info_platform = 'client_info_platform_example' # str | Platform where the application is running. (optional)
    client_info_user_id = 'client_info_user_id_example' # str | Required. A client-generated user ID. The ID should be generated and persisted during the first user session or whenever a pre-existing ID is not found. The exact format is up to the client. This must be non-empty in a GetFeatureTileRequest (whether via the header or GetFeatureTileRequest.client_info). (optional)
    max_elevation_resolution_cells = 56 # int | The maximum allowed resolution for the returned elevation heightmap. Possible values: between 1 and 1024 (and not less than min_elevation_resolution_cells). Over-sized heightmaps will be non-uniformly down-sampled such that each edge is no longer than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 100px (width) * 30px (height) max_elevation_resolution: 30 New resolution: 30px (width) * 30px (height) (optional)
    min_elevation_resolution_cells = 56 # int |  api-linter: core::0131::request-unknown-fields=disabled aip.dev/not-precedent: Maintaining existing request parameter pattern. The minimum allowed resolution for the returned elevation heightmap. Possible values: between 0 and 1024 (and not more than max_elevation_resolution_cells). Zero is supported for backward compatibility. Under-sized heightmaps will be non-uniformly up-sampled such that each edge is no shorter than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 30px (width) * 10px (height) min_elevation_resolution: 30 New resolution: 30px (width) * 30px (height) (optional)
    terrain_formats = ['terrain_formats_example'] # List[str] | Terrain formats that the client understands. (optional)
    enable_modeled_volumes = True # bool | Flag indicating whether 3D building models should be enabled. If this is set structures will be returned as 3D modeled volumes rather than 2.5D extruded areas where possible. (optional)
    enable_political_features = True # bool | Flag indicating whether political features should be returned. (optional)
    enable_private_roads = True # bool | Flag indicating whether the returned tile will contain road features that are marked private. Private roads are indicated by the Feature.segment_info.road_info.is_private field. (optional)
    enable_unclipped_buildings = True # bool | Flag indicating whether unclipped buildings should be returned. If this is set, building render ops will extend beyond the tile boundary. Buildings will only be returned on the tile that contains their centroid. (optional)
    language_code = 'language_code_example' # str | Required. The BCP-47 language code corresponding to the language in which the name was requested, such as \"en-US\" or \"sr-Latn\". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. (optional)
    region_code = 'region_code_example' # str | Required. The Unicode country/region code (CLDR) of the location from which the request is coming from, such as \"US\" and \"419\". For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag. (optional)

    try:
        api_response = api_instance.vectortile_terraintiles_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, altitude_precision_centimeters=altitude_precision_centimeters, client_info_api_client=client_info_api_client, client_info_application_id=client_info_application_id, client_info_application_version=client_info_application_version, client_info_device_model=client_info_device_model, client_info_operating_system=client_info_operating_system, client_info_platform=client_info_platform, client_info_user_id=client_info_user_id, max_elevation_resolution_cells=max_elevation_resolution_cells, min_elevation_resolution_cells=min_elevation_resolution_cells, terrain_formats=terrain_formats, enable_modeled_volumes=enable_modeled_volumes, enable_political_features=enable_political_features, enable_private_roads=enable_private_roads, enable_unclipped_buildings=enable_unclipped_buildings, language_code=language_code, region_code=region_code)
        print("The response of TerraintilesApi->vectortile_terraintiles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerraintilesApi->vectortile_terraintiles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. Resource name of the tile. The tile resource name is prefixed by its collection ID &#x60;terraintiles/&#x60; followed by the resource ID, which encodes the tile&#39;s global x and y coordinates and zoom level as &#x60;@,,z&#x60;. For example, &#x60;terraintiles/@1,2,3z&#x60;. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **altitude_precision_centimeters** | **int**| The precision of terrain altitudes in centimeters. Possible values: between 1 (cm level precision) and 1,000,000 (10-kilometer level precision). | [optional] 
 **client_info_api_client** | **str**| API client name and version. For example, the SDK calling the API. The exact format is up to the client. | [optional] 
 **client_info_application_id** | **str**| Application ID, such as the package name on Android and the bundle identifier on iOS platforms. | [optional] 
 **client_info_application_version** | **str**| Application version number, such as \&quot;1.2.3\&quot;. The exact format is application-dependent. | [optional] 
 **client_info_device_model** | **str**| Device model as reported by the device. The exact format is platform-dependent. | [optional] 
 **client_info_operating_system** | **str**| Operating system name and version as reported by the OS. For example, \&quot;Mac OS X 10.10.4\&quot;. The exact format is platform-dependent. | [optional] 
 **client_info_platform** | **str**| Platform where the application is running. | [optional] 
 **client_info_user_id** | **str**| Required. A client-generated user ID. The ID should be generated and persisted during the first user session or whenever a pre-existing ID is not found. The exact format is up to the client. This must be non-empty in a GetFeatureTileRequest (whether via the header or GetFeatureTileRequest.client_info). | [optional] 
 **max_elevation_resolution_cells** | **int**| The maximum allowed resolution for the returned elevation heightmap. Possible values: between 1 and 1024 (and not less than min_elevation_resolution_cells). Over-sized heightmaps will be non-uniformly down-sampled such that each edge is no longer than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 100px (width) * 30px (height) max_elevation_resolution: 30 New resolution: 30px (width) * 30px (height) | [optional] 
 **min_elevation_resolution_cells** | **int**|  api-linter: core::0131::request-unknown-fields&#x3D;disabled aip.dev/not-precedent: Maintaining existing request parameter pattern. The minimum allowed resolution for the returned elevation heightmap. Possible values: between 0 and 1024 (and not more than max_elevation_resolution_cells). Zero is supported for backward compatibility. Under-sized heightmaps will be non-uniformly up-sampled such that each edge is no shorter than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 30px (width) * 10px (height) min_elevation_resolution: 30 New resolution: 30px (width) * 30px (height) | [optional] 
 **terrain_formats** | [**List[str]**](str.md)| Terrain formats that the client understands. | [optional] 
 **enable_modeled_volumes** | **bool**| Flag indicating whether 3D building models should be enabled. If this is set structures will be returned as 3D modeled volumes rather than 2.5D extruded areas where possible. | [optional] 
 **enable_political_features** | **bool**| Flag indicating whether political features should be returned. | [optional] 
 **enable_private_roads** | **bool**| Flag indicating whether the returned tile will contain road features that are marked private. Private roads are indicated by the Feature.segment_info.road_info.is_private field. | [optional] 
 **enable_unclipped_buildings** | **bool**| Flag indicating whether unclipped buildings should be returned. If this is set, building render ops will extend beyond the tile boundary. Buildings will only be returned on the tile that contains their centroid. | [optional] 
 **language_code** | **str**| Required. The BCP-47 language code corresponding to the language in which the name was requested, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 
 **region_code** | **str**| Required. The Unicode country/region code (CLDR) of the location from which the request is coming from, such as \&quot;US\&quot; and \&quot;419\&quot;. For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag. | [optional] 

### Return type

[**TerrainTile**](TerrainTile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

