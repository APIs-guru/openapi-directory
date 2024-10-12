# PaymentProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ref** | **str** |  | [optional] 
**billing** | [**Address**](Address.md) |  | [optional] 
**card** | [**GetProfileDefaultCard**](GetProfileDefaultCard.md) |  | [optional] 
**code** | **int** | digits(2) | [optional] 
**custom** | [**Custom**](Custom.md) |  | [optional] 
**customer_code** | **str** | alphanumeric(32) | [optional] 
**language** | **str** | characters(2) | [optional] 
**last_transaction** | **str** | date and time alphanumeric(24) | [optional] 
**message** | **str** | alphanumeric(64) | [optional] 
**modified_date** | **str** | date and time it was last modified alphanumeric(24) | [optional] 
**profile_group** | **str** |  | [optional] 
**status** | **str** | characters(1) | [optional] 
**velocity_group** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.payment_profile import PaymentProfile

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProfile from a JSON string
payment_profile_instance = PaymentProfile.from_json(json)
# print the JSON string representation of the object
print(PaymentProfile.to_json())

# convert the object into a dict
payment_profile_dict = payment_profile_instance.to_dict()
# create an instance of PaymentProfile from a dict
payment_profile_from_dict = PaymentProfile.from_dict(payment_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


