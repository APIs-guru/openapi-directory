# ListKeyValueParameters

The parameters used to list a configuration store key-value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to retrieve. | 
**label** | **str** | The label of the key. | [optional] 

## Example

```python
from openapi_client.models.list_key_value_parameters import ListKeyValueParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ListKeyValueParameters from a JSON string
list_key_value_parameters_instance = ListKeyValueParameters.from_json(json)
# print the JSON string representation of the object
print(ListKeyValueParameters.to_json())

# convert the object into a dict
list_key_value_parameters_dict = list_key_value_parameters_instance.to_dict()
# create an instance of ListKeyValueParameters from a dict
list_key_value_parameters_from_dict = ListKeyValueParameters.from_dict(list_key_value_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


