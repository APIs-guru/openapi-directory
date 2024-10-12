# CancellationPolicyPartial

Cancellation Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charged_until** | **date** | Your obligation to pay for the service will end on this date. Typically &#x60;≥ decommission_at&#x60;. | [optional] 
**decommission_at** | **date** | This field denotes the first possible cancellation date of the service. | [optional] 

## Example

```python
from openapi_client.models.cancellation_policy_partial import CancellationPolicyPartial

# TODO update the JSON string below
json = "{}"
# create an instance of CancellationPolicyPartial from a JSON string
cancellation_policy_partial_instance = CancellationPolicyPartial.from_json(json)
# print the JSON string representation of the object
print(CancellationPolicyPartial.to_json())

# convert the object into a dict
cancellation_policy_partial_dict = cancellation_policy_partial_instance.to_dict()
# create an instance of CancellationPolicyPartial from a dict
cancellation_policy_partial_from_dict = CancellationPolicyPartial.from_dict(cancellation_policy_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


