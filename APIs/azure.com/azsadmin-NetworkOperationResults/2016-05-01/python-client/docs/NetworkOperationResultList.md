# NetworkOperationResultList

Pageable list of network operation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[NetworkOperationResult]**](NetworkOperationResult.md) | List of network operation results. | [optional] 

## Example

```python
from openapi_client.models.network_operation_result_list import NetworkOperationResultList

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkOperationResultList from a JSON string
network_operation_result_list_instance = NetworkOperationResultList.from_json(json)
# print the JSON string representation of the object
print(NetworkOperationResultList.to_json())

# convert the object into a dict
network_operation_result_list_dict = network_operation_result_list_instance.to_dict()
# create an instance of NetworkOperationResultList from a dict
network_operation_result_list_from_dict = NetworkOperationResultList.from_dict(network_operation_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


