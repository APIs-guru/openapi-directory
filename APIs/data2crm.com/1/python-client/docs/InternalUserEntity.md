# InternalUserEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**email** | **str** | Email | [optional] 
**internal_request_count** | **int** | Internal Request Count | [optional] 
**key** | **str** | User Key | [optional] 
**last_used_at** | **datetime** | Last Used At | [optional] 
**name** | **str** | Name | [optional] 
**organization** | **str** | Organization | [optional] 
**phone** | **str** | Phone | [optional] 
**request_count** | **int** | Request Count | [optional] 
**roles** | **List[str]** | Roles | [optional] 
**status** | **str** | Status | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.internal_user_entity import InternalUserEntity

# TODO update the JSON string below
json = "{}"
# create an instance of InternalUserEntity from a JSON string
internal_user_entity_instance = InternalUserEntity.from_json(json)
# print the JSON string representation of the object
print(InternalUserEntity.to_json())

# convert the object into a dict
internal_user_entity_dict = internal_user_entity_instance.to_dict()
# create an instance of InternalUserEntity from a dict
internal_user_entity_from_dict = InternalUserEntity.from_dict(internal_user_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


