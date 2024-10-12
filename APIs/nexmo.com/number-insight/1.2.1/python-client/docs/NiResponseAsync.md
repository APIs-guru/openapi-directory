# NiResponseAsync


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_text** | **str** | The status description of your request. Note: This field is equivalent to &#x60;status_message&#x60; field in the other endpoints | [optional] 
**number** | **str** | The &#x60;number&#x60; in your request | [optional] 
**remaining_balance** | **str** | Your account balance in EUR after this request. | [optional] 
**request_id** | **str** | The unique identifier for your request. This is a alphanumeric string up to 40 characters. | [optional] 
**request_price** | **str** | If there is an internal lookup error, the &#x60;refund_price&#x60; will reflect the lookup price. If &#x60;cnam&#x60; is requested for a non-US number the &#x60;refund_price&#x60; will reflect the &#x60;cnam&#x60; price. If both of these conditions occur, &#x60;refund_price&#x60; is the sum of the lookup price and &#x60;cnam&#x60; price. | [optional] 
**status** | [**NiStandardAdvancedStatus**](NiStandardAdvancedStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.ni_response_async import NiResponseAsync

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseAsync from a JSON string
ni_response_async_instance = NiResponseAsync.from_json(json)
# print the JSON string representation of the object
print(NiResponseAsync.to_json())

# convert the object into a dict
ni_response_async_dict = ni_response_async_instance.to_dict()
# create an instance of NiResponseAsync from a dict
ni_response_async_from_dict = NiResponseAsync.from_dict(ni_response_async_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


