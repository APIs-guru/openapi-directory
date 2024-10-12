# TagApiSpecRevisionRequest

Request message for TagApiSpecRevision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | Required. The tag to apply. The tag should be at most 40 characters, and match &#x60;a-z{3,39}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.tag_api_spec_revision_request import TagApiSpecRevisionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TagApiSpecRevisionRequest from a JSON string
tag_api_spec_revision_request_instance = TagApiSpecRevisionRequest.from_json(json)
# print the JSON string representation of the object
print(TagApiSpecRevisionRequest.to_json())

# convert the object into a dict
tag_api_spec_revision_request_dict = tag_api_spec_revision_request_instance.to_dict()
# create an instance of TagApiSpecRevisionRequest from a dict
tag_api_spec_revision_request_from_dict = TagApiSpecRevisionRequest.from_dict(tag_api_spec_revision_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


