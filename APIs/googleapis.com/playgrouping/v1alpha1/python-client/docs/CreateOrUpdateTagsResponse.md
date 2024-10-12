# CreateOrUpdateTagsResponse

Response message for CreateOrUpdateTags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | [**List[Tag]**](Tag.md) | All requested tags are returned, including pre-existing ones. | [optional] 

## Example

```python
from openapi_client.models.create_or_update_tags_response import CreateOrUpdateTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateTagsResponse from a JSON string
create_or_update_tags_response_instance = CreateOrUpdateTagsResponse.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateTagsResponse.to_json())

# convert the object into a dict
create_or_update_tags_response_dict = create_or_update_tags_response_instance.to_dict()
# create an instance of CreateOrUpdateTagsResponse from a dict
create_or_update_tags_response_from_dict = CreateOrUpdateTagsResponse.from_dict(create_or_update_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


