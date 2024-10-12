# CreateLineResponse

The result of creating a line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the created line. | [optional] 

## Example

```python
from openapi_client.models.create_line_response import CreateLineResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLineResponse from a JSON string
create_line_response_instance = CreateLineResponse.from_json(json)
# print the JSON string representation of the object
print(CreateLineResponse.to_json())

# convert the object into a dict
create_line_response_dict = create_line_response_instance.to_dict()
# create an instance of CreateLineResponse from a dict
create_line_response_from_dict = CreateLineResponse.from_dict(create_line_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


