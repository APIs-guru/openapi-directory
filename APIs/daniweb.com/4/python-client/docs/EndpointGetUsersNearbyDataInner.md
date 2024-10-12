# EndpointGetUsersNearbyDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance_away** | [**EndpointGetUsersIDSynergiesDataInnerMatchDistanceAway**](EndpointGetUsersIDSynergiesDataInnerMatchDistanceAway.md) |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_users_nearby_data_inner import EndpointGetUsersNearbyDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetUsersNearbyDataInner from a JSON string
endpoint_get_users_nearby_data_inner_instance = EndpointGetUsersNearbyDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointGetUsersNearbyDataInner.to_json())

# convert the object into a dict
endpoint_get_users_nearby_data_inner_dict = endpoint_get_users_nearby_data_inner_instance.to_dict()
# create an instance of EndpointGetUsersNearbyDataInner from a dict
endpoint_get_users_nearby_data_inner_from_dict = EndpointGetUsersNearbyDataInner.from_dict(endpoint_get_users_nearby_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


