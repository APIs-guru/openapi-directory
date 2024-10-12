# EndpointPostGroupsMessagesMetadataFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPostGroupsMessagesMetadataFiltersDataInner]**](EndpointPostGroupsMessagesMetadataFiltersDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_groups_messages_metadata_filters import EndpointPostGroupsMessagesMetadataFilters

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostGroupsMessagesMetadataFilters from a JSON string
endpoint_post_groups_messages_metadata_filters_instance = EndpointPostGroupsMessagesMetadataFilters.from_json(json)
# print the JSON string representation of the object
print(EndpointPostGroupsMessagesMetadataFilters.to_json())

# convert the object into a dict
endpoint_post_groups_messages_metadata_filters_dict = endpoint_post_groups_messages_metadata_filters_instance.to_dict()
# create an instance of EndpointPostGroupsMessagesMetadataFilters from a dict
endpoint_post_groups_messages_metadata_filters_from_dict = EndpointPostGroupsMessagesMetadataFilters.from_dict(endpoint_post_groups_messages_metadata_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


