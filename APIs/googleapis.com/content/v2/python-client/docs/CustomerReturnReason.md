# CustomerReturnReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the reason. | [optional] 
**reason_code** | **str** | Code of the return reason. Acceptable values are: - \&quot;&#x60;betterPriceFound&#x60;\&quot; - \&quot;&#x60;changedMind&#x60;\&quot; - \&quot;&#x60;damagedOrDefectiveItem&#x60;\&quot; - \&quot;&#x60;didNotMatchDescription&#x60;\&quot; - \&quot;&#x60;doesNotFit&#x60;\&quot; - \&quot;&#x60;expiredItem&#x60;\&quot; - \&quot;&#x60;incorrectItemReceived&#x60;\&quot; - \&quot;&#x60;noLongerNeeded&#x60;\&quot; - \&quot;&#x60;notSpecified&#x60;\&quot; - \&quot;&#x60;orderedWrongItem&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;qualityNotExpected&#x60;\&quot; - \&quot;&#x60;receivedTooLate&#x60;\&quot; - \&quot;&#x60;undeliverable&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.customer_return_reason import CustomerReturnReason

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerReturnReason from a JSON string
customer_return_reason_instance = CustomerReturnReason.from_json(json)
# print the JSON string representation of the object
print(CustomerReturnReason.to_json())

# convert the object into a dict
customer_return_reason_dict = customer_return_reason_instance.to_dict()
# create an instance of CustomerReturnReason from a dict
customer_return_reason_from_dict = CustomerReturnReason.from_dict(customer_return_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


