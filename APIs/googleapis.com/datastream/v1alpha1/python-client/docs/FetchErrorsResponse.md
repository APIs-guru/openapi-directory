# FetchErrorsResponse

Response message for a 'FetchErrors' response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) | The list of errors on the Stream. | [optional] 

## Example

```python
from openapi_client.models.fetch_errors_response import FetchErrorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchErrorsResponse from a JSON string
fetch_errors_response_instance = FetchErrorsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchErrorsResponse.to_json())

# convert the object into a dict
fetch_errors_response_dict = fetch_errors_response_instance.to_dict()
# create an instance of FetchErrorsResponse from a dict
fetch_errors_response_from_dict = FetchErrorsResponse.from_dict(fetch_errors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


