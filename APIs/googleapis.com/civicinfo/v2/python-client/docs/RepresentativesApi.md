# openapi_client.RepresentativesApi

All URIs are relative to *https://civicinfo.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**civicinfo_representatives_representative_info_by_address**](RepresentativesApi.md#civicinfo_representatives_representative_info_by_address) | **GET** /civicinfo/v2/representatives | 
[**civicinfo_representatives_representative_info_by_division**](RepresentativesApi.md#civicinfo_representatives_representative_info_by_division) | **GET** /civicinfo/v2/representatives/{ocdId} | 


# **civicinfo_representatives_representative_info_by_address**
> RepresentativeInfoResponse civicinfo_representatives_representative_info_by_address(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, address=address, include_offices=include_offices, levels=levels, roles=roles)



Looks up political geography and representative information for a single address.

### Example


```python
import openapi_client
from openapi_client.models.representative_info_response import RepresentativeInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://civicinfo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://civicinfo.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepresentativesApi(api_client)
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
    address = 'address_example' # str | The address to look up. May only be specified if the field ocdId is not given in the URL (optional)
    include_offices = True # bool | Whether to return information about offices and officials. If false, only the top-level district information will be returned. (optional)
    levels = ['levels_example'] # List[str] | A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned. (optional)
    roles = ['roles_example'] # List[str] | A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned. (optional)

    try:
        api_response = api_instance.civicinfo_representatives_representative_info_by_address(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, address=address, include_offices=include_offices, levels=levels, roles=roles)
        print("The response of RepresentativesApi->civicinfo_representatives_representative_info_by_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepresentativesApi->civicinfo_representatives_representative_info_by_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **address** | **str**| The address to look up. May only be specified if the field ocdId is not given in the URL | [optional] 
 **include_offices** | **bool**| Whether to return information about offices and officials. If false, only the top-level district information will be returned. | [optional] 
 **levels** | [**List[str]**](str.md)| A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don&#39;t contain a matching office will not be returned. | [optional] 
 **roles** | [**List[str]**](str.md)| A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don&#39;t contain a matching office will not be returned. | [optional] 

### Return type

[**RepresentativeInfoResponse**](RepresentativeInfoResponse.md)

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

# **civicinfo_representatives_representative_info_by_division**
> RepresentativeInfoData civicinfo_representatives_representative_info_by_division(ocd_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, levels=levels, recursive=recursive, roles=roles)



Looks up representative information for a single geographic division.

### Example


```python
import openapi_client
from openapi_client.models.representative_info_data import RepresentativeInfoData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://civicinfo.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://civicinfo.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RepresentativesApi(api_client)
    ocd_id = 'ocd_id_example' # str | The Open Civic Data division identifier of the division to look up.
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
    levels = ['levels_example'] # List[str] | A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned. (optional)
    recursive = True # bool | If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs. (optional)
    roles = ['roles_example'] # List[str] | A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned. (optional)

    try:
        api_response = api_instance.civicinfo_representatives_representative_info_by_division(ocd_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, levels=levels, recursive=recursive, roles=roles)
        print("The response of RepresentativesApi->civicinfo_representatives_representative_info_by_division:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RepresentativesApi->civicinfo_representatives_representative_info_by_division: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ocd_id** | **str**| The Open Civic Data division identifier of the division to look up. | 
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
 **levels** | [**List[str]**](str.md)| A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don&#39;t contain a matching office will not be returned. | [optional] 
 **recursive** | **bool**| If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would also return all DC&#39;s wards and ANCs. | [optional] 
 **roles** | [**List[str]**](str.md)| A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don&#39;t contain a matching office will not be returned. | [optional] 

### Return type

[**RepresentativeInfoData**](RepresentativeInfoData.md)

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

