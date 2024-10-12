# EndpointPostUsersMetadataFiltersDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_metadata** | **Dict[str, List[str]]** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_users_metadata_filters_data_inner import EndpointPostUsersMetadataFiltersDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostUsersMetadataFiltersDataInner from a JSON string
endpoint_post_users_metadata_filters_data_inner_instance = EndpointPostUsersMetadataFiltersDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointPostUsersMetadataFiltersDataInner.to_json())

# convert the object into a dict
endpoint_post_users_metadata_filters_data_inner_dict = endpoint_post_users_metadata_filters_data_inner_instance.to_dict()
# create an instance of EndpointPostUsersMetadataFiltersDataInner from a dict
endpoint_post_users_metadata_filters_data_inner_from_dict = EndpointPostUsersMetadataFiltersDataInner.from_dict(endpoint_post_users_metadata_filters_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


