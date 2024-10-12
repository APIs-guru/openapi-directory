# OrderreturnsProcessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_status** | **str** | The status of the execution. Acceptable values are: - \&quot;&#x60;duplicate&#x60;\&quot; - \&quot;&#x60;executed&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#orderreturnsProcessResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orderreturns_process_response import OrderreturnsProcessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsProcessResponse from a JSON string
orderreturns_process_response_instance = OrderreturnsProcessResponse.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsProcessResponse.to_json())

# convert the object into a dict
orderreturns_process_response_dict = orderreturns_process_response_instance.to_dict()
# create an instance of OrderreturnsProcessResponse from a dict
orderreturns_process_response_from_dict = OrderreturnsProcessResponse.from_dict(orderreturns_process_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


