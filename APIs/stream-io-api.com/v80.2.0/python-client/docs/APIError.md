# APIError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **int** | Response HTTP status code | 
**code** | **int** | API error code | 
**details** | **List[int]** | Additional error-specific information | 
**duration** | **str** | Request duration | 
**exception_fields** | **Dict[str, str]** | Additional error info | [optional] 
**message** | **str** | Message describing an error | 
**more_info** | **str** | URL with additional information | 

## Example

```python
from openapi_client.models.api_error import APIError

# TODO update the JSON string below
json = "{}"
# create an instance of APIError from a JSON string
api_error_instance = APIError.from_json(json)
# print the JSON string representation of the object
print(APIError.to_json())

# convert the object into a dict
api_error_dict = api_error_instance.to_dict()
# create an instance of APIError from a dict
api_error_from_dict = APIError.from_dict(api_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


