# KeysResult

Result of an operation to get  the keys extracted by a model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | **Dict[str, List[str]]** | Object mapping ClusterIds to Key lists. | [optional] 

## Example

```python
from openapi_client.models.keys_result import KeysResult

# TODO update the JSON string below
json = "{}"
# create an instance of KeysResult from a JSON string
keys_result_instance = KeysResult.from_json(json)
# print the JSON string representation of the object
print(KeysResult.to_json())

# convert the object into a dict
keys_result_dict = keys_result_instance.to_dict()
# create an instance of KeysResult from a dict
keys_result_from_dict = KeysResult.from_dict(keys_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


