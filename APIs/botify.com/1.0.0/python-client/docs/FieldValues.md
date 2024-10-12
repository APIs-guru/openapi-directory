# FieldValues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**results** | [**List[FieldValuesResult]**](FieldValuesResult.md) |  | 

## Example

```python
from openapi_client.models.field_values import FieldValues

# TODO update the JSON string below
json = "{}"
# create an instance of FieldValues from a JSON string
field_values_instance = FieldValues.from_json(json)
# print the JSON string representation of the object
print(FieldValues.to_json())

# convert the object into a dict
field_values_dict = field_values_instance.to_dict()
# create an instance of FieldValues from a dict
field_values_from_dict = FieldValues.from_dict(field_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


