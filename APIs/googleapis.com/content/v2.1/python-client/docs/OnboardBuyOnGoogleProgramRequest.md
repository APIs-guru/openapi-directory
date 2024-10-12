# OnboardBuyOnGoogleProgramRequest

Request message for the OnboardProgram method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_service_email** | **str** | The customer service email. | [optional] 

## Example

```python
from openapi_client.models.onboard_buy_on_google_program_request import OnboardBuyOnGoogleProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardBuyOnGoogleProgramRequest from a JSON string
onboard_buy_on_google_program_request_instance = OnboardBuyOnGoogleProgramRequest.from_json(json)
# print the JSON string representation of the object
print(OnboardBuyOnGoogleProgramRequest.to_json())

# convert the object into a dict
onboard_buy_on_google_program_request_dict = onboard_buy_on_google_program_request_instance.to_dict()
# create an instance of OnboardBuyOnGoogleProgramRequest from a dict
onboard_buy_on_google_program_request_from_dict = OnboardBuyOnGoogleProgramRequest.from_dict(onboard_buy_on_google_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


