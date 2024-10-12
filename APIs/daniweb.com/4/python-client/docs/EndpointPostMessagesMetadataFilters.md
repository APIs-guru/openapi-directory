# EndpointPostMessagesMetadataFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPostMessagesMetadataFiltersDataInner]**](EndpointPostMessagesMetadataFiltersDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_messages_metadata_filters import EndpointPostMessagesMetadataFilters

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostMessagesMetadataFilters from a JSON string
endpoint_post_messages_metadata_filters_instance = EndpointPostMessagesMetadataFilters.from_json(json)
# print the JSON string representation of the object
print(EndpointPostMessagesMetadataFilters.to_json())

# convert the object into a dict
endpoint_post_messages_metadata_filters_dict = endpoint_post_messages_metadata_filters_instance.to_dict()
# create an instance of EndpointPostMessagesMetadataFilters from a dict
endpoint_post_messages_metadata_filters_from_dict = EndpointPostMessagesMetadataFilters.from_dict(endpoint_post_messages_metadata_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


