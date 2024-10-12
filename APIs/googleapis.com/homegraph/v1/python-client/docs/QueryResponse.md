# QueryResponse

Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.home.google.com/cloud-to-cloud/intents/query). Example: ```json { \"requestId\": \"ff36a3cc-ec34-11e6-b1a0-64510650abcf\", \"payload\": { \"devices\": { \"123\": { \"on\": true, \"online\": true }, \"456\": { \"on\": true, \"online\": true, \"brightness\": 80, \"color\": { \"name\": \"cerulean\", \"spectrumRGB\": 31655 } } } } } ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | [**QueryResponsePayload**](QueryResponsePayload.md) |  | [optional] 
**request_id** | **str** | Request ID used for debugging. Copied from the request. | [optional] 

## Example

```python
from openapi_client.models.query_response import QueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResponse from a JSON string
query_response_instance = QueryResponse.from_json(json)
# print the JSON string representation of the object
print(QueryResponse.to_json())

# convert the object into a dict
query_response_dict = query_response_instance.to_dict()
# create an instance of QueryResponse from a dict
query_response_from_dict = QueryResponse.from_dict(query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


