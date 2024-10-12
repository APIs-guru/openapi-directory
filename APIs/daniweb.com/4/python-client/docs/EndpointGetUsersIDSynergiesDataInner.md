# EndpointGetUsersIDSynergiesDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional** | [**EndpointGetUsersIDSynergiesDataInnerAdditional**](EndpointGetUsersIDSynergiesDataInnerAdditional.md) |  | [optional] 
**conversation** | [**Conversation**](Conversation.md) |  | [optional] 
**match** | [**EndpointGetUsersIDSynergiesDataInnerMatch**](EndpointGetUsersIDSynergiesDataInnerMatch.md) |  | [optional] 
**meet** | [**EndpointGetUsersIDSynergiesDataInnerMeet**](EndpointGetUsersIDSynergiesDataInnerMeet.md) |  | [optional] 
**relationship** | [**EndpointGetUsersIDSynergiesDataInnerRelationship**](EndpointGetUsersIDSynergiesDataInnerRelationship.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_users_id_synergies_data_inner import EndpointGetUsersIDSynergiesDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetUsersIDSynergiesDataInner from a JSON string
endpoint_get_users_id_synergies_data_inner_instance = EndpointGetUsersIDSynergiesDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointGetUsersIDSynergiesDataInner.to_json())

# convert the object into a dict
endpoint_get_users_id_synergies_data_inner_dict = endpoint_get_users_id_synergies_data_inner_instance.to_dict()
# create an instance of EndpointGetUsersIDSynergiesDataInner from a dict
endpoint_get_users_id_synergies_data_inner_from_dict = EndpointGetUsersIDSynergiesDataInner.from_dict(endpoint_get_users_id_synergies_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


