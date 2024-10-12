# KeyListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[Key]**](Key.md) | Lists the automation keys. | [optional] 

## Example

```python
from openapi_client.models.key_list_result import KeyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of KeyListResult from a JSON string
key_list_result_instance = KeyListResult.from_json(json)
# print the JSON string representation of the object
print(KeyListResult.to_json())

# convert the object into a dict
key_list_result_dict = key_list_result_instance.to_dict()
# create an instance of KeyListResult from a dict
key_list_result_from_dict = KeyListResult.from_dict(key_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


