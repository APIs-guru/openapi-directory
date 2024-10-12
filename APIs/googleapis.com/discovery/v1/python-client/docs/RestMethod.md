# RestMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deprecated** | **bool** | Whether this method is deprecated. | [optional] 
**description** | **str** | Description of this method. | [optional] 
**etag_required** | **bool** | Whether this method requires an ETag to be specified. The ETag is sent as an HTTP If-Match or If-None-Match header. | [optional] 
**flat_path** | **str** | The URI path of this REST method in (RFC 6570) format without level 2 features ({+var}). Supplementary to the path property. | [optional] 
**http_method** | **str** | HTTP method used by this method. | [optional] 
**id** | **str** | A unique ID for this method. This property can be used to match methods between different versions of Discovery. | [optional] 
**media_upload** | [**RestMethodMediaUpload**](RestMethodMediaUpload.md) |  | [optional] 
**parameter_order** | **List[str]** | Ordered list of required parameters, serves as a hint to clients on how to structure their method signatures. The array is ordered such that the \&quot;most-significant\&quot; parameter appears first. | [optional] 
**parameters** | [**Dict[str, JsonSchema]**](JsonSchema.md) | Details for all parameters in this method. | [optional] 
**path** | **str** | The URI path of this REST method. Should be used in conjunction with the basePath property at the api-level. | [optional] 
**request** | [**RestMethodRequest**](RestMethodRequest.md) |  | [optional] 
**response** | [**RestMethodResponse**](RestMethodResponse.md) |  | [optional] 
**scopes** | **List[str]** | OAuth 2.0 scopes applicable to this method. | [optional] 
**supports_media_download** | **bool** | Whether this method supports media downloads. | [optional] 
**supports_media_upload** | **bool** | Whether this method supports media uploads. | [optional] 
**supports_subscription** | **bool** | Whether this method supports subscriptions. | [optional] 
**use_media_download_service** | **bool** | Indicates that downloads from this method should use the download service URL (i.e. \&quot;/download\&quot;). Only applies if the method supports media download. | [optional] 

## Example

```python
from openapi_client.models.rest_method import RestMethod

# TODO update the JSON string below
json = "{}"
# create an instance of RestMethod from a JSON string
rest_method_instance = RestMethod.from_json(json)
# print the JSON string representation of the object
print(RestMethod.to_json())

# convert the object into a dict
rest_method_dict = rest_method_instance.to_dict()
# create an instance of RestMethod from a dict
rest_method_from_dict = RestMethod.from_dict(rest_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


