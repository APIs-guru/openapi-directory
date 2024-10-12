# VerificationIPFlowResult

Results of IP flow verification on the target resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Access to be allowed or denied. | [optional] 
**rule_name** | **str** | Name of the rule. If input is not matched against any security rule, it is not displayed. | [optional] 

## Example

```python
from openapi_client.models.verification_ip_flow_result import VerificationIPFlowResult

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationIPFlowResult from a JSON string
verification_ip_flow_result_instance = VerificationIPFlowResult.from_json(json)
# print the JSON string representation of the object
print(VerificationIPFlowResult.to_json())

# convert the object into a dict
verification_ip_flow_result_dict = verification_ip_flow_result_instance.to_dict()
# create an instance of VerificationIPFlowResult from a dict
verification_ip_flow_result_from_dict = VerificationIPFlowResult.from_dict(verification_ip_flow_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


