# CustomDimension

JSON template for Analytics Custom Dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID. | [optional] 
**active** | **bool** | Boolean indicating whether the custom dimension is active. | [optional] 
**created** | **datetime** | Time the custom dimension was created. | [optional] [readonly] 
**id** | **str** | Custom dimension ID. | [optional] 
**index** | **int** | Index of the custom dimension. | [optional] [readonly] 
**kind** | **str** | Kind value for a custom dimension. Set to \&quot;analytics#customDimension\&quot;. It is a read-only field. | [optional] [readonly] [default to 'analytics#customDimension']
**name** | **str** | Name of the custom dimension. | [optional] 
**parent_link** | [**CustomDimensionParentLink**](CustomDimensionParentLink.md) |  | [optional] 
**scope** | **str** | Scope of the custom dimension: HIT, SESSION, USER or PRODUCT. | [optional] 
**self_link** | **str** | Link for the custom dimension | [optional] [readonly] 
**updated** | **datetime** | Time the custom dimension was last modified. | [optional] [readonly] 
**web_property_id** | **str** | Property ID. | [optional] 

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


