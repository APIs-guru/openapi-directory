# CustomDimension

A message containing the custom dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Custom dimension name. | [optional] 
**value** | **str** | Custom dimension value. | [optional] 

## Example

```python
from openapi_client.models.custom_dimension import CustomDimension

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDimension from a JSON string
custom_dimension_instance = CustomDimension.from_json(json)
# print the JSON string representation of the object
print(CustomDimension.to_json())

# convert the object into a dict
custom_dimension_dict = custom_dimension_instance.to_dict()
# create an instance of CustomDimension from a dict
custom_dimension_from_dict = CustomDimension.from_dict(custom_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


