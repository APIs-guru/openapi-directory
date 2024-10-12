# GetNumberInsightAdvanced200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caller_identity** | [**NiCallerIdentity**](NiCallerIdentity.md) |  | [optional] 
**country_code** | **str** | Two character country code for &#x60;number&#x60;. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. | 
**country_code_iso3** | **str** | Three character country code for &#x60;number&#x60;. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format. | 
**country_name** | **str** | The full name of the country that &#x60;number&#x60; is registered in. | 
**country_prefix** | **str** | The numeric prefix for the country that &#x60;number&#x60; is registered in. | 
**current_carrier** | [**NiCurrentCarrierProperties**](NiCurrentCarrierProperties.md) |  | [optional] 
**international_format_number** | **str** | The &#x60;number&#x60; in your request in international format. | 
**lookup_outcome** | **int** | Shows if all information about a phone number has been returned. Possible values:  Code | Text --- | --- 0 | Success 1 | Partial success - some fields populated 2 | Failed  | [optional] 
**lookup_outcome_message** | **str** | Shows if all information about a phone number has been returned. | [optional] 
**national_format_number** | **str** | The &#x60;number&#x60; in your request in the format used by the country the number belongs to. | 
**original_carrier** | [**NiInitialCarrierProperties**](NiInitialCarrierProperties.md) |  | [optional] 
**ported** | **str** | If the user has changed carrier for &#x60;number&#x60;. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported. | [optional] 
**reachable** | **str** | Can you call &#x60;number&#x60; now. This is applicable to mobile numbers only. | [optional] 
**real_time_data** | [**NiRealtimeData**](NiRealtimeData.md) |  | [optional] 
**refund_price** | **str** | If there is an internal lookup error, the &#x60;refund_price&#x60; will reflect the lookup price. If &#x60;cnam&#x60; is requested for a non-US number the &#x60;refund_price&#x60; will reflect the &#x60;cnam&#x60; price. If both of these conditions occur, &#x60;refund_price&#x60; is the sum of the lookup price and &#x60;cnam&#x60; price. | [optional] 
**remaining_balance** | **str** | Your account balance in EUR after this request. | [optional] 
**request_id** | **str** | The unique identifier for your request. This is a alphanumeric string up to 40 characters. | 
**request_price** | **str** | The amount in EUR charged to your account. | [optional] 
**roaming** | **str** |  | [optional] 
**status** | [**NiStandardAdvancedStatus**](NiStandardAdvancedStatus.md) |  | 
**status_message** | **str** | The status description of your request. | 
**valid_number** | **str** | Does &#x60;number&#x60; exist. &#x60;unknown&#x60; means the number could not be validated. &#x60;valid&#x60; means the number is valid. &#x60;not_valid&#x60; means the number is not valid. &#x60;inferred_not_valid&#x60; means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only. | [optional] 

## Example

```python
from openapi_client.models.get_number_insight_advanced200_response import GetNumberInsightAdvanced200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNumberInsightAdvanced200Response from a JSON string
get_number_insight_advanced200_response_instance = GetNumberInsightAdvanced200Response.from_json(json)
# print the JSON string representation of the object
print(GetNumberInsightAdvanced200Response.to_json())

# convert the object into a dict
get_number_insight_advanced200_response_dict = get_number_insight_advanced200_response_instance.to_dict()
# create an instance of GetNumberInsightAdvanced200Response from a dict
get_number_insight_advanced200_response_from_dict = GetNumberInsightAdvanced200Response.from_dict(get_number_insight_advanced200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


