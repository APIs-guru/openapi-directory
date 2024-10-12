# CreateOrUpdateTagsRequest

Request message for CreateOrUpdateTags. VerifyToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | [**List[Tag]**](Tag.md) | Tags to be inserted or updated. | [optional] 

## Example

```python
from openapi_client.models.create_or_update_tags_request import CreateOrUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateTagsRequest from a JSON string
create_or_update_tags_request_instance = CreateOrUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateTagsRequest.to_json())

# convert the object into a dict
create_or_update_tags_request_dict = create_or_update_tags_request_instance.to_dict()
# create an instance of CreateOrUpdateTagsRequest from a dict
create_or_update_tags_request_from_dict = CreateOrUpdateTagsRequest.from_dict(create_or_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


