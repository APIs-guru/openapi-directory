# SasPortalAssignment

Associates `members` with a `role`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | **List[str]** | The identities the role is assigned to. It can have the following values: * &#x60;{user_email}&#x60;: An email address that represents a specific Google account. For example: &#x60;alice@gmail.com&#x60;. * &#x60;{group_email}&#x60;: An email address that represents a Google group. For example, &#x60;viewers@gmail.com&#x60;. | [optional] 
**role** | **str** | Required. Role that is assigned to &#x60;members&#x60;. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_assignment import SasPortalAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalAssignment from a JSON string
sas_portal_assignment_instance = SasPortalAssignment.from_json(json)
# print the JSON string representation of the object
print(SasPortalAssignment.to_json())

# convert the object into a dict
sas_portal_assignment_dict = sas_portal_assignment_instance.to_dict()
# create an instance of SasPortalAssignment from a dict
sas_portal_assignment_from_dict = SasPortalAssignment.from_dict(sas_portal_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


