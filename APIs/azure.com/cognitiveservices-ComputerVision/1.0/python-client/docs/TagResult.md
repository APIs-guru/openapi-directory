# TagResult

The results of a image tag operation, including any tags and image metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**ImageMetadata**](ImageMetadata.md) |  | [optional] 
**request_id** | **str** | Id of the REST API request. | [optional] 
**tags** | [**List[ImageTag]**](ImageTag.md) | A list of tags with confidence level. | [optional] 

## Example

```python
from openapi_client.models.tag_result import TagResult

# TODO update the JSON string below
json = "{}"
# create an instance of TagResult from a JSON string
tag_result_instance = TagResult.from_json(json)
# print the JSON string representation of the object
print(TagResult.to_json())

# convert the object into a dict
tag_result_dict = tag_result_instance.to_dict()
# create an instance of TagResult from a dict
tag_result_from_dict = TagResult.from_dict(tag_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


