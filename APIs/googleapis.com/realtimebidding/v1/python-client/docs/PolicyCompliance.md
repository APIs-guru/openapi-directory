# PolicyCompliance

Policy compliance of the creative for a transaction type or a region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Serving status for the given transaction type (for example, open auction, deals) or region (for example, China, Russia). Can be used to filter the response of the creatives.list method. | [optional] 
**topics** | [**List[PolicyTopicEntry]**](PolicyTopicEntry.md) | Topics related to the policy compliance for this transaction type (for example, open auction, deals) or region (for example, China, Russia). Topics may be present only if status is DISAPPROVED. | [optional] 

## Example

```python
from openapi_client.models.policy_compliance import PolicyCompliance

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyCompliance from a JSON string
policy_compliance_instance = PolicyCompliance.from_json(json)
# print the JSON string representation of the object
print(PolicyCompliance.to_json())

# convert the object into a dict
policy_compliance_dict = policy_compliance_instance.to_dict()
# create an instance of PolicyCompliance from a dict
policy_compliance_from_dict = PolicyCompliance.from_dict(policy_compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


