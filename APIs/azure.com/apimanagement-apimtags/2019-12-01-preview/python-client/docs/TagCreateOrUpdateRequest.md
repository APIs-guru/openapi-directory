# TagCreateOrUpdateRequest

Parameters supplied to Create/Update Tag operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagListByService200ResponseValueInnerProperties**](TagListByService200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_create_or_update_request import TagCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TagCreateOrUpdateRequest from a JSON string
tag_create_or_update_request_instance = TagCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(TagCreateOrUpdateRequest.to_json())

# convert the object into a dict
tag_create_or_update_request_dict = tag_create_or_update_request_instance.to_dict()
# create an instance of TagCreateOrUpdateRequest from a dict
tag_create_or_update_request_from_dict = TagCreateOrUpdateRequest.from_dict(tag_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


