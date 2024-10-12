# PolicyDriftDetails

The policy field that violates the deployed posture and its expected and detected values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_value** | **str** | The detected value that violates the deployed posture, for example, &#x60;false&#x60; or &#x60;allowed_values&#x3D;{\&quot;projects/22831892\&quot;}&#x60;. | [optional] 
**expected_value** | **str** | The value of this field that was configured in a posture, for example, &#x60;true&#x60; or &#x60;allowed_values&#x3D;{\&quot;projects/29831892\&quot;}&#x60;. | [optional] 
**var_field** | **str** | The name of the updated field, for example constraint.implementation.policy_rules[0].enforce | [optional] 

## Example

```python
from openapi_client.models.policy_drift_details import PolicyDriftDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDriftDetails from a JSON string
policy_drift_details_instance = PolicyDriftDetails.from_json(json)
# print the JSON string representation of the object
print(PolicyDriftDetails.to_json())

# convert the object into a dict
policy_drift_details_dict = policy_drift_details_instance.to_dict()
# create an instance of PolicyDriftDetails from a dict
policy_drift_details_from_dict = PolicyDriftDetails.from_dict(policy_drift_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


