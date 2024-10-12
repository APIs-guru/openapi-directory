# KeyValueListResult

The result of a list request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**items** | [**List[KeyValue]**](KeyValue.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.key_value_list_result import KeyValueListResult

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValueListResult from a JSON string
key_value_list_result_instance = KeyValueListResult.from_json(json)
# print the JSON string representation of the object
print(KeyValueListResult.to_json())

# convert the object into a dict
key_value_list_result_dict = key_value_list_result_instance.to_dict()
# create an instance of KeyValueListResult from a dict
key_value_list_result_from_dict = KeyValueListResult.from_dict(key_value_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


