# ResponseWithContinuationVirtualNetwork

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[VirtualNetwork]**](VirtualNetwork.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_virtual_network import ResponseWithContinuationVirtualNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationVirtualNetwork from a JSON string
response_with_continuation_virtual_network_instance = ResponseWithContinuationVirtualNetwork.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationVirtualNetwork.to_json())

# convert the object into a dict
response_with_continuation_virtual_network_dict = response_with_continuation_virtual_network_instance.to_dict()
# create an instance of ResponseWithContinuationVirtualNetwork from a dict
response_with_continuation_virtual_network_from_dict = ResponseWithContinuationVirtualNetwork.from_dict(response_with_continuation_virtual_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


