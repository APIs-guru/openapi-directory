# OrderreturnsAcknowledgeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_status** | **str** | The status of the execution. Acceptable values are: - \&quot;&#x60;duplicate&#x60;\&quot; - \&quot;&#x60;executed&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#orderreturnsAcknowledgeResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orderreturns_acknowledge_response import OrderreturnsAcknowledgeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsAcknowledgeResponse from a JSON string
orderreturns_acknowledge_response_instance = OrderreturnsAcknowledgeResponse.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsAcknowledgeResponse.to_json())

# convert the object into a dict
orderreturns_acknowledge_response_dict = orderreturns_acknowledge_response_instance.to_dict()
# create an instance of OrderreturnsAcknowledgeResponse from a dict
orderreturns_acknowledge_response_from_dict = OrderreturnsAcknowledgeResponse.from_dict(orderreturns_acknowledge_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


