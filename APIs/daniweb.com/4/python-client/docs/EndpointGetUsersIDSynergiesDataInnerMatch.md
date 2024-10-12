# EndpointGetUsersIDSynergiesDataInnerMatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithmic_match** | **bool** |  | [optional] 
**complementary_goals** | **List[str]** |  | [optional] 
**distance_away** | [**EndpointGetUsersIDSynergiesDataInnerMatchDistanceAway**](EndpointGetUsersIDSynergiesDataInnerMatchDistanceAway.md) |  | [optional] 
**industry** | [**EndpointGetUsersIDSynergiesDataInnerMatchIndustry**](EndpointGetUsersIDSynergiesDataInnerMatchIndustry.md) |  | [optional] 
**mutual_connections** | [**EndpointGetUsersIDSynergiesDataInnerMatchMutualConnections**](EndpointGetUsersIDSynergiesDataInnerMatchMutualConnections.md) |  | [optional] 
**recommendation_strength** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_users_id_synergies_data_inner_match import EndpointGetUsersIDSynergiesDataInnerMatch

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetUsersIDSynergiesDataInnerMatch from a JSON string
endpoint_get_users_id_synergies_data_inner_match_instance = EndpointGetUsersIDSynergiesDataInnerMatch.from_json(json)
# print the JSON string representation of the object
print(EndpointGetUsersIDSynergiesDataInnerMatch.to_json())

# convert the object into a dict
endpoint_get_users_id_synergies_data_inner_match_dict = endpoint_get_users_id_synergies_data_inner_match_instance.to_dict()
# create an instance of EndpointGetUsersIDSynergiesDataInnerMatch from a dict
endpoint_get_users_id_synergies_data_inner_match_from_dict = EndpointGetUsersIDSynergiesDataInnerMatch.from_dict(endpoint_get_users_id_synergies_data_inner_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


