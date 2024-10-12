# ProvisioningIssue

Information about issues with provisioning a Managed Certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Output only. Human readable explanation about the issue. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use Reason enum. | [optional] [readonly] 
**reason** | **str** | Output only. Reason for provisioning failures. | [optional] [readonly] 

## Example

```python
from openapi_client.models.provisioning_issue import ProvisioningIssue

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningIssue from a JSON string
provisioning_issue_instance = ProvisioningIssue.from_json(json)
# print the JSON string representation of the object
print(ProvisioningIssue.to_json())

# convert the object into a dict
provisioning_issue_dict = provisioning_issue_instance.to_dict()
# create an instance of ProvisioningIssue from a dict
provisioning_issue_from_dict = ProvisioningIssue.from_dict(provisioning_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


