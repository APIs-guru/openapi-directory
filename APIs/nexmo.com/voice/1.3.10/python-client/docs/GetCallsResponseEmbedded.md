# GetCallsResponseEmbedded

A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calls** | [**List[GetCallResponse]**](GetCallResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_calls_response_embedded import GetCallsResponseEmbedded

# TODO update the JSON string below
json = "{}"
# create an instance of GetCallsResponseEmbedded from a JSON string
get_calls_response_embedded_instance = GetCallsResponseEmbedded.from_json(json)
# print the JSON string representation of the object
print(GetCallsResponseEmbedded.to_json())

# convert the object into a dict
get_calls_response_embedded_dict = get_calls_response_embedded_instance.to_dict()
# create an instance of GetCallsResponseEmbedded from a dict
get_calls_response_embedded_from_dict = GetCallsResponseEmbedded.from_dict(get_calls_response_embedded_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


