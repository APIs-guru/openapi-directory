# UpdateInstanceMetadataItemsRequest

Request for adding/changing metadata items for an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **Dict[str, str]** | Metadata items to add/update for the instance. | [optional] 

## Example

```python
from openapi_client.models.update_instance_metadata_items_request import UpdateInstanceMetadataItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInstanceMetadataItemsRequest from a JSON string
update_instance_metadata_items_request_instance = UpdateInstanceMetadataItemsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateInstanceMetadataItemsRequest.to_json())

# convert the object into a dict
update_instance_metadata_items_request_dict = update_instance_metadata_items_request_instance.to_dict()
# create an instance of UpdateInstanceMetadataItemsRequest from a dict
update_instance_metadata_items_request_from_dict = UpdateInstanceMetadataItemsRequest.from_dict(update_instance_metadata_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


