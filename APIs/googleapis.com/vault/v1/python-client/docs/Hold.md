# Hold

A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[HeldAccount]**](HeldAccount.md) | If set, the hold applies to the specified accounts and **orgUnit** must be empty. | [optional] 
**corpus** | **str** | The service to be searched. | [optional] 
**hold_id** | **str** | The unique immutable ID of the hold. Assigned during creation. | [optional] 
**name** | **str** | The name of the hold. | [optional] 
**org_unit** | [**HeldOrgUnit**](HeldOrgUnit.md) |  | [optional] 
**query** | [**CorpusQuery**](CorpusQuery.md) |  | [optional] 
**update_time** | **str** | The last time this hold was modified. | [optional] 

## Example

```python
from openapi_client.models.hold import Hold

# TODO update the JSON string below
json = "{}"
# create an instance of Hold from a JSON string
hold_instance = Hold.from_json(json)
# print the JSON string representation of the object
print(Hold.to_json())

# convert the object into a dict
hold_dict = hold_instance.to_dict()
# create an instance of Hold from a dict
hold_from_dict = Hold.from_dict(hold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


