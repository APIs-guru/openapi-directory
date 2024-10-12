# EndpointGetUsersNearby


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointGetUsersNearbyDataInner]**](EndpointGetUsersNearbyDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_users_nearby import EndpointGetUsersNearby

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetUsersNearby from a JSON string
endpoint_get_users_nearby_instance = EndpointGetUsersNearby.from_json(json)
# print the JSON string representation of the object
print(EndpointGetUsersNearby.to_json())

# convert the object into a dict
endpoint_get_users_nearby_dict = endpoint_get_users_nearby_instance.to_dict()
# create an instance of EndpointGetUsersNearby from a dict
endpoint_get_users_nearby_from_dict = EndpointGetUsersNearby.from_dict(endpoint_get_users_nearby_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


