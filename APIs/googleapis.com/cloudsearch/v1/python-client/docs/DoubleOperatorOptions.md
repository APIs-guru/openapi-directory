# DoubleOperatorOptions

Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator_name** | **str** | Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.double_operator_options import DoubleOperatorOptions

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleOperatorOptions from a JSON string
double_operator_options_instance = DoubleOperatorOptions.from_json(json)
# print the JSON string representation of the object
print(DoubleOperatorOptions.to_json())

# convert the object into a dict
double_operator_options_dict = double_operator_options_instance.to_dict()
# create an instance of DoubleOperatorOptions from a dict
double_operator_options_from_dict = DoubleOperatorOptions.from_dict(double_operator_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


