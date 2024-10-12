# EndpointGetUsersIDMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[UserData]**](UserData.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_users_id_metadata import EndpointGetUsersIDMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetUsersIDMetadata from a JSON string
endpoint_get_users_id_metadata_instance = EndpointGetUsersIDMetadata.from_json(json)
# print the JSON string representation of the object
print(EndpointGetUsersIDMetadata.to_json())

# convert the object into a dict
endpoint_get_users_id_metadata_dict = endpoint_get_users_id_metadata_instance.to_dict()
# create an instance of EndpointGetUsersIDMetadata from a dict
endpoint_get_users_id_metadata_from_dict = EndpointGetUsersIDMetadata.from_dict(endpoint_get_users_id_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


