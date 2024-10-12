# CreatePhraseSetRequest

Message sent by the client for the `CreatePhraseSet` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phrase_set** | [**PhraseSet**](PhraseSet.md) |  | [optional] 
**phrase_set_id** | **str** | Required. The ID to use for the phrase set, which will become the final component of the phrase set&#39;s resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters. | [optional] 

## Example

```python
from openapi_client.models.create_phrase_set_request import CreatePhraseSetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePhraseSetRequest from a JSON string
create_phrase_set_request_instance = CreatePhraseSetRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePhraseSetRequest.to_json())

# convert the object into a dict
create_phrase_set_request_dict = create_phrase_set_request_instance.to_dict()
# create an instance of CreatePhraseSetRequest from a dict
create_phrase_set_request_from_dict = CreatePhraseSetRequest.from_dict(create_phrase_set_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


