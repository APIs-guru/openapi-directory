# EndpointPostUsersMetadataFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPostUsersMetadataFiltersDataInner]**](EndpointPostUsersMetadataFiltersDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_users_metadata_filters import EndpointPostUsersMetadataFilters

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostUsersMetadataFilters from a JSON string
endpoint_post_users_metadata_filters_instance = EndpointPostUsersMetadataFilters.from_json(json)
# print the JSON string representation of the object
print(EndpointPostUsersMetadataFilters.to_json())

# convert the object into a dict
endpoint_post_users_metadata_filters_dict = endpoint_post_users_metadata_filters_instance.to_dict()
# create an instance of EndpointPostUsersMetadataFilters from a dict
endpoint_post_users_metadata_filters_from_dict = EndpointPostUsersMetadataFilters.from_dict(endpoint_post_users_metadata_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


