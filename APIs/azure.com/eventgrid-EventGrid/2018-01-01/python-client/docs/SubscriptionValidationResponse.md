# SubscriptionValidationResponse

To complete an event subscription validation handshake, a subscriber can use either the validationCode or the validationUrl received in a SubscriptionValidationEvent. When the validationCode is used, the SubscriptionValidationResponse can be used to build the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validation_response** | **str** | The validation response sent by the subscriber to Azure Event Grid to complete the validation of an event subscription. | [optional] 

## Example

```python
from openapi_client.models.subscription_validation_response import SubscriptionValidationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionValidationResponse from a JSON string
subscription_validation_response_instance = SubscriptionValidationResponse.from_json(json)
# print the JSON string representation of the object
print(SubscriptionValidationResponse.to_json())

# convert the object into a dict
subscription_validation_response_dict = subscription_validation_response_instance.to_dict()
# create an instance of SubscriptionValidationResponse from a dict
subscription_validation_response_from_dict = SubscriptionValidationResponse.from_dict(subscription_validation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


