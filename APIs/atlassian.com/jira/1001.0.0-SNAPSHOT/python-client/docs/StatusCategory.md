# StatusCategory

A status category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_name** | **str** | The name of the color used to represent the status category. | [optional] [readonly] 
**id** | **int** | The ID of the status category. | [optional] [readonly] 
**key** | **str** | The key of the status category. | [optional] [readonly] 
**name** | **str** | The name of the status category. | [optional] [readonly] 
**var_self** | **str** | The URL of the status category. | [optional] [readonly] 

## Example

```python
from openapi_client.models.status_category import StatusCategory

# TODO update the JSON string below
json = "{}"
# create an instance of StatusCategory from a JSON string
status_category_instance = StatusCategory.from_json(json)
# print the JSON string representation of the object
print(StatusCategory.to_json())

# convert the object into a dict
status_category_dict = status_category_instance.to_dict()
# create an instance of StatusCategory from a dict
status_category_from_dict = StatusCategory.from_dict(status_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


