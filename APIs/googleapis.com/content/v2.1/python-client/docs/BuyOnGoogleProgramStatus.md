# BuyOnGoogleProgramStatus

Response message for the GetProgramStatus method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_model** | **List[str]** | The business models in which merchant participates. | [optional] 
**customer_service_pending_email** | **str** | The customer service pending email. After verification this field becomes empty. | [optional] 
**customer_service_pending_phone_number** | **str** | The pending phone number specified for BuyOnGoogle program. It might be different than account level phone number. In order to update this field the customer_service_pending_phone_region_code must also be set. After verification this field becomes empty. | [optional] 
**customer_service_pending_phone_region_code** | **str** | Two letter country code for the pending phone number, for example &#x60;CA&#x60; for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. In order to update this field the customer_service_pending_phone_number must also be set. After verification this field becomes empty. | [optional] 
**customer_service_verified_email** | **str** | Output only. The customer service verified email. | [optional] [readonly] 
**customer_service_verified_phone_number** | **str** | Output only. The verified phone number specified for BuyOnGoogle program. It might be different than account level phone number. | [optional] [readonly] 
**customer_service_verified_phone_region_code** | **str** | Output only. Two letter country code for the verified phone number, for example &#x60;CA&#x60; for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. | [optional] [readonly] 
**online_sales_channel** | **str** | The channels through which the merchant is selling. | [optional] 
**participation_stage** | **str** | Output only. The current participation stage for the program. | [optional] [readonly] 

## Example

```python
from openapi_client.models.buy_on_google_program_status import BuyOnGoogleProgramStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BuyOnGoogleProgramStatus from a JSON string
buy_on_google_program_status_instance = BuyOnGoogleProgramStatus.from_json(json)
# print the JSON string representation of the object
print(BuyOnGoogleProgramStatus.to_json())

# convert the object into a dict
buy_on_google_program_status_dict = buy_on_google_program_status_instance.to_dict()
# create an instance of BuyOnGoogleProgramStatus from a dict
buy_on_google_program_status_from_dict = BuyOnGoogleProgramStatus.from_dict(buy_on_google_program_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


