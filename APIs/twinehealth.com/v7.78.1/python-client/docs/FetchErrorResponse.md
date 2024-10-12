# FetchErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Error**](Error.md) |  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_error_response import FetchErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchErrorResponse from a JSON string
fetch_error_response_instance = FetchErrorResponse.from_json(json)
# print the JSON string representation of the object
print(FetchErrorResponse.to_json())

# convert the object into a dict
fetch_error_response_dict = fetch_error_response_instance.to_dict()
# create an instance of FetchErrorResponse from a dict
fetch_error_response_from_dict = FetchErrorResponse.from_dict(fetch_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


