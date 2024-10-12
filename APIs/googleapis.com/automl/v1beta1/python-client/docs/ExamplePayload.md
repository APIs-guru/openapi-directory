# ExamplePayload

Example data used for training or prediction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**row** | [**Row**](Row.md) |  | [optional] 
**text_snippet** | [**TextSnippet**](TextSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.example_payload import ExamplePayload

# TODO update the JSON string below
json = "{}"
# create an instance of ExamplePayload from a JSON string
example_payload_instance = ExamplePayload.from_json(json)
# print the JSON string representation of the object
print(ExamplePayload.to_json())

# convert the object into a dict
example_payload_dict = example_payload_instance.to_dict()
# create an instance of ExamplePayload from a dict
example_payload_from_dict = ExamplePayload.from_dict(example_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


