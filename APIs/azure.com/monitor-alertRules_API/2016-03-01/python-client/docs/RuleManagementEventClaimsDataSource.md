# RuleManagementEventClaimsDataSource

The claims for a rule management event data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | the email address. | [optional] 

## Example

```python
from openapi_client.models.rule_management_event_claims_data_source import RuleManagementEventClaimsDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of RuleManagementEventClaimsDataSource from a JSON string
rule_management_event_claims_data_source_instance = RuleManagementEventClaimsDataSource.from_json(json)
# print the JSON string representation of the object
print(RuleManagementEventClaimsDataSource.to_json())

# convert the object into a dict
rule_management_event_claims_data_source_dict = rule_management_event_claims_data_source_instance.to_dict()
# create an instance of RuleManagementEventClaimsDataSource from a dict
rule_management_event_claims_data_source_from_dict = RuleManagementEventClaimsDataSource.from_dict(rule_management_event_claims_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


