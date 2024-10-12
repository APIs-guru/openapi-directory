# CreateFootnoteResponse

The result of creating a footnote.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**footnote_id** | **str** | The ID of the created footnote. | [optional] 

## Example

```python
from openapi_client.models.create_footnote_response import CreateFootnoteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFootnoteResponse from a JSON string
create_footnote_response_instance = CreateFootnoteResponse.from_json(json)
# print the JSON string representation of the object
print(CreateFootnoteResponse.to_json())

# convert the object into a dict
create_footnote_response_dict = create_footnote_response_instance.to_dict()
# create an instance of CreateFootnoteResponse from a dict
create_footnote_response_from_dict = CreateFootnoteResponse.from_dict(create_footnote_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


