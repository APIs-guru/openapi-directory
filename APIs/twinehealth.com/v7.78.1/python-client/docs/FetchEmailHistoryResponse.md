# FetchEmailHistoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EmailHistoryResource**](EmailHistoryResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_email_history_response import FetchEmailHistoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchEmailHistoryResponse from a JSON string
fetch_email_history_response_instance = FetchEmailHistoryResponse.from_json(json)
# print the JSON string representation of the object
print(FetchEmailHistoryResponse.to_json())

# convert the object into a dict
fetch_email_history_response_dict = fetch_email_history_response_instance.to_dict()
# create an instance of FetchEmailHistoryResponse from a dict
fetch_email_history_response_from_dict = FetchEmailHistoryResponse.from_dict(fetch_email_history_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


