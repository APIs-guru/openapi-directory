# CoursesContentIdMetadataTagsPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.courses_content_id_metadata_tags_put_request import CoursesContentIdMetadataTagsPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CoursesContentIdMetadataTagsPutRequest from a JSON string
courses_content_id_metadata_tags_put_request_instance = CoursesContentIdMetadataTagsPutRequest.from_json(json)
# print the JSON string representation of the object
print(CoursesContentIdMetadataTagsPutRequest.to_json())

# convert the object into a dict
courses_content_id_metadata_tags_put_request_dict = courses_content_id_metadata_tags_put_request_instance.to_dict()
# create an instance of CoursesContentIdMetadataTagsPutRequest from a dict
courses_content_id_metadata_tags_put_request_from_dict = CoursesContentIdMetadataTagsPutRequest.from_dict(courses_content_id_metadata_tags_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


