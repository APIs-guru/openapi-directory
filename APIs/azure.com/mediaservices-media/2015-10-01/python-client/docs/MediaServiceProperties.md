# MediaServiceProperties

The additional properties of a Media Service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_endpoints** | [**List[ApiEndpoint]**](ApiEndpoint.md) | Read-only property that lists the Media Services REST API endpoints for this resource. If supplied on a PUT or PATCH, the value will be ignored. | [optional] [readonly] 
**storage_accounts** | [**List[StorageAccount]**](StorageAccount.md) | The storage accounts for this resource. | [optional] 

## Example

```python
from openapi_client.models.media_service_properties import MediaServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MediaServiceProperties from a JSON string
media_service_properties_instance = MediaServiceProperties.from_json(json)
# print the JSON string representation of the object
print(MediaServiceProperties.to_json())

# convert the object into a dict
media_service_properties_dict = media_service_properties_instance.to_dict()
# create an instance of MediaServiceProperties from a dict
media_service_properties_from_dict = MediaServiceProperties.from_dict(media_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


