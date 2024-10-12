# EndpointPostMessagesMetadataFiltersDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_metadata** | **Dict[str, List[str]]** |  | [optional] 
**message** | [**Message**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_messages_metadata_filters_data_inner import EndpointPostMessagesMetadataFiltersDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostMessagesMetadataFiltersDataInner from a JSON string
endpoint_post_messages_metadata_filters_data_inner_instance = EndpointPostMessagesMetadataFiltersDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointPostMessagesMetadataFiltersDataInner.to_json())

# convert the object into a dict
endpoint_post_messages_metadata_filters_data_inner_dict = endpoint_post_messages_metadata_filters_data_inner_instance.to_dict()
# create an instance of EndpointPostMessagesMetadataFiltersDataInner from a dict
endpoint_post_messages_metadata_filters_data_inner_from_dict = EndpointPostMessagesMetadataFiltersDataInner.from_dict(endpoint_post_messages_metadata_filters_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


