# FetchEmailHistoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EmailHistoryResource]**](EmailHistoryResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_email_histories_response import FetchEmailHistoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchEmailHistoriesResponse from a JSON string
fetch_email_histories_response_instance = FetchEmailHistoriesResponse.from_json(json)
# print the JSON string representation of the object
print(FetchEmailHistoriesResponse.to_json())

# convert the object into a dict
fetch_email_histories_response_dict = fetch_email_histories_response_instance.to_dict()
# create an instance of FetchEmailHistoriesResponse from a dict
fetch_email_histories_response_from_dict = FetchEmailHistoriesResponse.from_dict(fetch_email_histories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


