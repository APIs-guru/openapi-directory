# EndpointPostUsersIDMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Dict[str, List[str]]** |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_users_id_metadata import EndpointPostUsersIDMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostUsersIDMetadata from a JSON string
endpoint_post_users_id_metadata_instance = EndpointPostUsersIDMetadata.from_json(json)
# print the JSON string representation of the object
print(EndpointPostUsersIDMetadata.to_json())

# convert the object into a dict
endpoint_post_users_id_metadata_dict = endpoint_post_users_id_metadata_instance.to_dict()
# create an instance of EndpointPostUsersIDMetadata from a dict
endpoint_post_users_id_metadata_from_dict = EndpointPostUsersIDMetadata.from_dict(endpoint_post_users_id_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


