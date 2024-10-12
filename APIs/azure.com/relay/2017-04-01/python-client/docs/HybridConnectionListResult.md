# HybridConnectionListResult

The response of the list hybrid connection operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if value contains incomplete list hybrid connection operation. | [optional] 
**value** | [**List[HybridConnection]**](HybridConnection.md) | Result of the list hybrid connections. | [optional] 

## Example

```python
from openapi_client.models.hybrid_connection_list_result import HybridConnectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of HybridConnectionListResult from a JSON string
hybrid_connection_list_result_instance = HybridConnectionListResult.from_json(json)
# print the JSON string representation of the object
print(HybridConnectionListResult.to_json())

# convert the object into a dict
hybrid_connection_list_result_dict = hybrid_connection_list_result_instance.to_dict()
# create an instance of HybridConnectionListResult from a dict
hybrid_connection_list_result_from_dict = HybridConnectionListResult.from_dict(hybrid_connection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


