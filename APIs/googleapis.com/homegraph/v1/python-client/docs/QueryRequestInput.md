# QueryRequestInput

Device ID inputs to QueryRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | [**QueryRequestPayload**](QueryRequestPayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_request_input import QueryRequestInput

# TODO update the JSON string below
json = "{}"
# create an instance of QueryRequestInput from a JSON string
query_request_input_instance = QueryRequestInput.from_json(json)
# print the JSON string representation of the object
print(QueryRequestInput.to_json())

# convert the object into a dict
query_request_input_dict = query_request_input_instance.to_dict()
# create an instance of QueryRequestInput from a dict
query_request_input_from_dict = QueryRequestInput.from_dict(query_request_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


