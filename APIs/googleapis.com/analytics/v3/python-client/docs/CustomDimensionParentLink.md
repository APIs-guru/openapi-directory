# CustomDimensionParentLink

Parent link for the custom dimension. Points to the property to which the custom dimension belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the property to which the custom dimension belongs. | [optional] 
**type** | **str** | Type of the parent link. Set to \&quot;analytics#webproperty\&quot;. | [optional] [default to 'analytics#webproperty']

## Example

```python
from openapi_client.models.custom_dimension_parent_link import CustomDimensionParentLink

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDimensionParentLink from a JSON string
custom_dimension_parent_link_instance = CustomDimensionParentLink.from_json(json)
# print the JSON string representation of the object
print(CustomDimensionParentLink.to_json())

# convert the object into a dict
custom_dimension_parent_link_dict = custom_dimension_parent_link_instance.to_dict()
# create an instance of CustomDimensionParentLink from a dict
custom_dimension_parent_link_from_dict = CustomDimensionParentLink.from_dict(custom_dimension_parent_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


