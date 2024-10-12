# Value

Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fp_val** | **float** | Floating point value. When this is set, other values must not be set. | [optional] 
**int_val** | **int** | Integer value. When this is set, other values must not be set. | [optional] 
**map_val** | [**List[ValueMapValEntry]**](ValueMapValEntry.md) | Map value. The valid key space and units for the corresponding value of each entry should be documented as part of the data type definition. Keys should be kept small whenever possible. Data streams with large keys and high data frequency may be down sampled. | [optional] 
**string_val** | **str** | String value. When this is set, other values must not be set. Strings should be kept small whenever possible. Data streams with large string values and high data frequency may be down sampled. | [optional] 

## Example

```python
from openapi_client.models.value import Value

# TODO update the JSON string below
json = "{}"
# create an instance of Value from a JSON string
value_instance = Value.from_json(json)
# print the JSON string representation of the object
print(Value.to_json())

# convert the object into a dict
value_dict = value_instance.to_dict()
# create an instance of Value from a dict
value_from_dict = Value.from_dict(value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


