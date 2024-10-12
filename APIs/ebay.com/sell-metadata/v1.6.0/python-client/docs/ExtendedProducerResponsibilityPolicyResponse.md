# ExtendedProducerResponsibilityPolicyResponse

A type that defines the response fields for the <b>getExtendedProducerResponsibilityPolicies</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_producer_responsibilities** | [**List[ExtendedProducerResponsibilityPolicy]**](ExtendedProducerResponsibilityPolicy.md) | An array of response fields detailing the Extended Producer Responsibility policies supported for the specified marketplace. | [optional] 
**warnings** | [**List[Error]**](Error.md) | A collection of warnings generated for the request. | [optional] 

## Example

```python
from openapi_client.models.extended_producer_responsibility_policy_response import ExtendedProducerResponsibilityPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedProducerResponsibilityPolicyResponse from a JSON string
extended_producer_responsibility_policy_response_instance = ExtendedProducerResponsibilityPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(ExtendedProducerResponsibilityPolicyResponse.to_json())

# convert the object into a dict
extended_producer_responsibility_policy_response_dict = extended_producer_responsibility_policy_response_instance.to_dict()
# create an instance of ExtendedProducerResponsibilityPolicyResponse from a dict
extended_producer_responsibility_policy_response_from_dict = ExtendedProducerResponsibilityPolicyResponse.from_dict(extended_producer_responsibility_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


