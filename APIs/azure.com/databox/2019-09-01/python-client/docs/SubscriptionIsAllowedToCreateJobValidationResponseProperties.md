# SubscriptionIsAllowedToCreateJobValidationResponseProperties

Properties of subscription permission to create job validation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Validation status of subscription permission to create job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_is_allowed_to_create_job_validation_response_properties import SubscriptionIsAllowedToCreateJobValidationResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionIsAllowedToCreateJobValidationResponseProperties from a JSON string
subscription_is_allowed_to_create_job_validation_response_properties_instance = SubscriptionIsAllowedToCreateJobValidationResponseProperties.from_json(json)
# print the JSON string representation of the object
print(SubscriptionIsAllowedToCreateJobValidationResponseProperties.to_json())

# convert the object into a dict
subscription_is_allowed_to_create_job_validation_response_properties_dict = subscription_is_allowed_to_create_job_validation_response_properties_instance.to_dict()
# create an instance of SubscriptionIsAllowedToCreateJobValidationResponseProperties from a dict
subscription_is_allowed_to_create_job_validation_response_properties_from_dict = SubscriptionIsAllowedToCreateJobValidationResponseProperties.from_dict(subscription_is_allowed_to_create_job_validation_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


