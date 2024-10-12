# LookupStreamObjectRequest

Request for looking up a specific stream object by its source object identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_object_identifier** | [**SourceObjectIdentifier**](SourceObjectIdentifier.md) |  | [optional] 

## Example

```python
from openapi_client.models.lookup_stream_object_request import LookupStreamObjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LookupStreamObjectRequest from a JSON string
lookup_stream_object_request_instance = LookupStreamObjectRequest.from_json(json)
# print the JSON string representation of the object
print(LookupStreamObjectRequest.to_json())

# convert the object into a dict
lookup_stream_object_request_dict = lookup_stream_object_request_instance.to_dict()
# create an instance of LookupStreamObjectRequest from a dict
lookup_stream_object_request_from_dict = LookupStreamObjectRequest.from_dict(lookup_stream_object_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


