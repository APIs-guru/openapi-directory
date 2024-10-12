# MediaService

A Media Services account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MediaServiceProperties**](MediaServiceProperties.md) |  | [optional] 
**location** | **str** | The Azure Region of the resource. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.media_service import MediaService

# TODO update the JSON string below
json = "{}"
# create an instance of MediaService from a JSON string
media_service_instance = MediaService.from_json(json)
# print the JSON string representation of the object
print(MediaService.to_json())

# convert the object into a dict
media_service_dict = media_service_instance.to_dict()
# create an instance of MediaService from a dict
media_service_from_dict = MediaService.from_dict(media_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


