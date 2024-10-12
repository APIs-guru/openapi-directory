# MediaService

The properties of a Media Service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MediaServiceProperties**](MediaServiceProperties.md) |  | [optional] 
**id** | **str** | The id of the resource. | [optional] [readonly] 
**location** | **str** | The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags to help categorize the resource in the Azure portal. | [optional] 
**type** | **str** | The type of the resource | [optional] [readonly] 

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


