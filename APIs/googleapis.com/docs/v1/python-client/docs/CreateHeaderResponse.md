# CreateHeaderResponse

The result of creating a header.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header_id** | **str** | The ID of the created header. | [optional] 

## Example

```python
from openapi_client.models.create_header_response import CreateHeaderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateHeaderResponse from a JSON string
create_header_response_instance = CreateHeaderResponse.from_json(json)
# print the JSON string representation of the object
print(CreateHeaderResponse.to_json())

# convert the object into a dict
create_header_response_dict = create_header_response_instance.to_dict()
# create an instance of CreateHeaderResponse from a dict
create_header_response_from_dict = CreateHeaderResponse.from_dict(create_header_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


