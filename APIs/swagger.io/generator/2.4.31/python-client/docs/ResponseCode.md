# ResponseCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | File download code | [optional] 
**link** | **str** | URL for fetching the generated client | [optional] 

## Example

```python
from openapi_client.models.response_code import ResponseCode

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseCode from a JSON string
response_code_instance = ResponseCode.from_json(json)
# print the JSON string representation of the object
print(ResponseCode.to_json())

# convert the object into a dict
response_code_dict = response_code_instance.to_dict()
# create an instance of ResponseCode from a dict
response_code_from_dict = ResponseCode.from_dict(response_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


