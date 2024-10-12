# APIError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_error** | **int** | API error code. If set and &gt; 0 then an API error has occurred your request could not be completed | 
**api_error_msg** | **str** | API error message | 

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


