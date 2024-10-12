# OrderreturnsAcknowledgeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | [required] The ID of the operation, unique across all operations for a given order return. | [optional] 

## Example

```python
from openapi_client.models.orderreturns_acknowledge_request import OrderreturnsAcknowledgeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsAcknowledgeRequest from a JSON string
orderreturns_acknowledge_request_instance = OrderreturnsAcknowledgeRequest.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsAcknowledgeRequest.to_json())

# convert the object into a dict
orderreturns_acknowledge_request_dict = orderreturns_acknowledge_request_instance.to_dict()
# create an instance of OrderreturnsAcknowledgeRequest from a dict
orderreturns_acknowledge_request_from_dict = OrderreturnsAcknowledgeRequest.from_dict(orderreturns_acknowledge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


