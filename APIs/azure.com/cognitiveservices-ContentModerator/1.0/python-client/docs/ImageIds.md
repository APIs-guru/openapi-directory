# ImageIds

Image Id properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_ids** | **List[int]** | Id of the contents. | [optional] 
**content_source** | **str** | Source of the content. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**tracking_id** | **str** | Tracking Id. | [optional] 

## Example

```python
from openapi_client.models.image_ids import ImageIds

# TODO update the JSON string below
json = "{}"
# create an instance of ImageIds from a JSON string
image_ids_instance = ImageIds.from_json(json)
# print the JSON string representation of the object
print(ImageIds.to_json())

# convert the object into a dict
image_ids_dict = image_ids_instance.to_dict()
# create an instance of ImageIds from a dict
image_ids_from_dict = ImageIds.from_dict(image_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


