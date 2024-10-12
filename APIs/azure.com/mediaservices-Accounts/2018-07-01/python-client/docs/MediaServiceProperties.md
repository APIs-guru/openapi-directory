# MediaServiceProperties

Properties of the Media Services account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_service_id** | **str** | The Media Services account ID. | [optional] [readonly] 
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


