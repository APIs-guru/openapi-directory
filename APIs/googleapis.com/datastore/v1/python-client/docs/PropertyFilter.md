# PropertyFilter

A filter on a specific property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **str** | The operator to filter by. | [optional] 
**var_property** | [**PropertyReference**](PropertyReference.md) |  | [optional] 
**value** | [**Value**](Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.property_filter import PropertyFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyFilter from a JSON string
property_filter_instance = PropertyFilter.from_json(json)
# print the JSON string representation of the object
print(PropertyFilter.to_json())

# convert the object into a dict
property_filter_dict = property_filter_instance.to_dict()
# create an instance of PropertyFilter from a dict
property_filter_from_dict = PropertyFilter.from_dict(property_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


