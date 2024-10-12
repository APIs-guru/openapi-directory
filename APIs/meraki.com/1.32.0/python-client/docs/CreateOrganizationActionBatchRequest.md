# CreateOrganizationActionBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[CreateOrganizationActionBatchRequestActionsInner]**](CreateOrganizationActionBatchRequestActionsInner.md) | A set of changes to make as part of this action (&lt;a href&#x3D;&#39;https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/&#39;&gt;more details&lt;/a&gt;) | 
**confirmed** | **bool** | Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false. | [optional] 
**synchronous** | **bool** | Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false. | [optional] 

## Example

```python
from openapi_client.models.create_organization_action_batch_request import CreateOrganizationActionBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationActionBatchRequest from a JSON string
create_organization_action_batch_request_instance = CreateOrganizationActionBatchRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationActionBatchRequest.to_json())

# convert the object into a dict
create_organization_action_batch_request_dict = create_organization_action_batch_request_instance.to_dict()
# create an instance of CreateOrganizationActionBatchRequest from a dict
create_organization_action_batch_request_from_dict = CreateOrganizationActionBatchRequest.from_dict(create_organization_action_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


