# ResponseStatusCode

A status to accept. Either a status code class like \"2xx\", or an integer status code like \"200\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_class** | **str** | A class of status codes to accept. | [optional] 
**status_value** | **int** | A status code to accept. | [optional] 

## Example

```python
from openapi_client.models.response_status_code import ResponseStatusCode

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseStatusCode from a JSON string
response_status_code_instance = ResponseStatusCode.from_json(json)
# print the JSON string representation of the object
print(ResponseStatusCode.to_json())

# convert the object into a dict
response_status_code_dict = response_status_code_instance.to_dict()
# create an instance of ResponseStatusCode from a dict
response_status_code_from_dict = ResponseStatusCode.from_dict(response_status_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


