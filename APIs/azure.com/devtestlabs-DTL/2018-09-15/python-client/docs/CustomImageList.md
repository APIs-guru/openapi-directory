# CustomImageList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[CustomImage]**](CustomImage.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.custom_image_list import CustomImageList

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImageList from a JSON string
custom_image_list_instance = CustomImageList.from_json(json)
# print the JSON string representation of the object
print(CustomImageList.to_json())

# convert the object into a dict
custom_image_list_dict = custom_image_list_instance.to_dict()
# create an instance of CustomImageList from a dict
custom_image_list_from_dict = CustomImageList.from_dict(custom_image_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


