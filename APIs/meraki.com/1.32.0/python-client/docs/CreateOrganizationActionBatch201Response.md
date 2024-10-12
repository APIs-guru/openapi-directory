# CreateOrganizationActionBatch201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[CreateOrganizationActionBatch201ResponseActionsInner]**](CreateOrganizationActionBatch201ResponseActionsInner.md) | A set of changes made as part of this action (&lt;a href&#x3D;&#39;https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/&#39;&gt;more details&lt;/a&gt;) | 
**confirmed** | **bool** | Flag describing whether the action should be previewed before executing or not | [optional] 
**id** | **str** | ID of the action batch. Can be used to check the status of the action batch at /organizations/{organizationId}/actionBatches/{actionBatchId} | [optional] 
**organization_id** | **str** | ID of the organization this action batch belongs to | [optional] 
**status** | [**CreateOrganizationActionBatch201ResponseStatus**](CreateOrganizationActionBatch201ResponseStatus.md) |  | [optional] 
**synchronous** | **bool** | Flag describing whether actions should run synchronously or asynchronously | [optional] 

## Example

```python
from openapi_client.models.create_organization_action_batch201_response import CreateOrganizationActionBatch201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationActionBatch201Response from a JSON string
create_organization_action_batch201_response_instance = CreateOrganizationActionBatch201Response.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationActionBatch201Response.to_json())

# convert the object into a dict
create_organization_action_batch201_response_dict = create_organization_action_batch201_response_instance.to_dict()
# create an instance of CreateOrganizationActionBatch201Response from a dict
create_organization_action_batch201_response_from_dict = CreateOrganizationActionBatch201Response.from_dict(create_organization_action_batch201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


