# UpdateInstanceMetadataItemsResponse

Response for adding/changing metadata items for an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **Dict[str, str]** | Map of items that were added/updated to/in the metadata. | [optional] 

## Example

```python
from openapi_client.models.update_instance_metadata_items_response import UpdateInstanceMetadataItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInstanceMetadataItemsResponse from a JSON string
update_instance_metadata_items_response_instance = UpdateInstanceMetadataItemsResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateInstanceMetadataItemsResponse.to_json())

# convert the object into a dict
update_instance_metadata_items_response_dict = update_instance_metadata_items_response_instance.to_dict()
# create an instance of UpdateInstanceMetadataItemsResponse from a dict
update_instance_metadata_items_response_from_dict = UpdateInstanceMetadataItemsResponse.from_dict(update_instance_metadata_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


