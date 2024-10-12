# LinkMetadata

Metadata for long running Link operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_link_request** | [**CreateLinkRequest**](CreateLinkRequest.md) |  | [optional] 
**delete_link_request** | [**DeleteLinkRequest**](DeleteLinkRequest.md) |  | [optional] 
**end_time** | **str** | The end time of an operation. | [optional] 
**start_time** | **str** | The start time of an operation. | [optional] 
**state** | **str** | Output only. State of an operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.link_metadata import LinkMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LinkMetadata from a JSON string
link_metadata_instance = LinkMetadata.from_json(json)
# print the JSON string representation of the object
print(LinkMetadata.to_json())

# convert the object into a dict
link_metadata_dict = link_metadata_instance.to_dict()
# create an instance of LinkMetadata from a dict
link_metadata_from_dict = LinkMetadata.from_dict(link_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


