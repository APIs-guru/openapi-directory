# TagDescriptionCreateOrUpdateRequest

Parameters supplied to the Create TagDescription operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagDescriptionCreateOrUpdateRequestProperties**](TagDescriptionCreateOrUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_description_create_or_update_request import TagDescriptionCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TagDescriptionCreateOrUpdateRequest from a JSON string
tag_description_create_or_update_request_instance = TagDescriptionCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(TagDescriptionCreateOrUpdateRequest.to_json())

# convert the object into a dict
tag_description_create_or_update_request_dict = tag_description_create_or_update_request_instance.to_dict()
# create an instance of TagDescriptionCreateOrUpdateRequest from a dict
tag_description_create_or_update_request_from_dict = TagDescriptionCreateOrUpdateRequest.from_dict(tag_description_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


