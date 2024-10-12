# UpdateOrganizationActionBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **bool** | A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true. | [optional] 
**synchronous** | **bool** | Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. | [optional] 

## Example

```python
from openapi_client.models.update_organization_action_batch_request import UpdateOrganizationActionBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationActionBatchRequest from a JSON string
update_organization_action_batch_request_instance = UpdateOrganizationActionBatchRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationActionBatchRequest.to_json())

# convert the object into a dict
update_organization_action_batch_request_dict = update_organization_action_batch_request_instance.to_dict()
# create an instance of UpdateOrganizationActionBatchRequest from a dict
update_organization_action_batch_request_from_dict = UpdateOrganizationActionBatchRequest.from_dict(update_organization_action_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


