# CreateOrganizationActionBatch201ResponseStatus

Status of action batch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **bool** | Flag describing whether all actions in the action batch have completed | [optional] 
**created_resources** | [**List[CreateOrganizationActionBatch201ResponseStatusCreatedResourcesInner]**](CreateOrganizationActionBatch201ResponseStatusCreatedResourcesInner.md) | Resources created as a result of this action batch | 
**errors** | **List[str]** | List of errors encountered when running actions in the action batch | [optional] 
**failed** | **bool** | Flag describing whether any actions in the action batch failed | [optional] 

## Example

```python
from openapi_client.models.create_organization_action_batch201_response_status import CreateOrganizationActionBatch201ResponseStatus

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationActionBatch201ResponseStatus from a JSON string
create_organization_action_batch201_response_status_instance = CreateOrganizationActionBatch201ResponseStatus.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationActionBatch201ResponseStatus.to_json())

# convert the object into a dict
create_organization_action_batch201_response_status_dict = create_organization_action_batch201_response_status_instance.to_dict()
# create an instance of CreateOrganizationActionBatch201ResponseStatus from a dict
create_organization_action_batch201_response_status_from_dict = CreateOrganizationActionBatch201ResponseStatus.from_dict(create_organization_action_batch201_response_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


