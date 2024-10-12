# EndpointPostGroupsMessagesMetadataFiltersDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_metadata** | **Dict[str, List[str]]** |  | [optional] 
**message** | [**GroupMessage**](GroupMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_groups_messages_metadata_filters_data_inner import EndpointPostGroupsMessagesMetadataFiltersDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostGroupsMessagesMetadataFiltersDataInner from a JSON string
endpoint_post_groups_messages_metadata_filters_data_inner_instance = EndpointPostGroupsMessagesMetadataFiltersDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointPostGroupsMessagesMetadataFiltersDataInner.to_json())

# convert the object into a dict
endpoint_post_groups_messages_metadata_filters_data_inner_dict = endpoint_post_groups_messages_metadata_filters_data_inner_instance.to_dict()
# create an instance of EndpointPostGroupsMessagesMetadataFiltersDataInner from a dict
endpoint_post_groups_messages_metadata_filters_data_inner_from_dict = EndpointPostGroupsMessagesMetadataFiltersDataInner.from_dict(endpoint_post_groups_messages_metadata_filters_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


