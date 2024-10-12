# CreateTagResponseBody

Response body for creating tags

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The tag name. | 

## Example

```python
from openapi_client.models.create_tag_response_body import CreateTagResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTagResponseBody from a JSON string
create_tag_response_body_instance = CreateTagResponseBody.from_json(json)
# print the JSON string representation of the object
print(CreateTagResponseBody.to_json())

# convert the object into a dict
create_tag_response_body_dict = create_tag_response_body_instance.to_dict()
# create an instance of CreateTagResponseBody from a dict
create_tag_response_body_from_dict = CreateTagResponseBody.from_dict(create_tag_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


