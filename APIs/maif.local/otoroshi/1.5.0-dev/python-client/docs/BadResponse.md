# BadResponse

An HTTP response that is not supposed to be returned by a service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The body of the HTTP response | 
**headers** | **Dict[str, str]** | The HTTP headers of the response | 
**status** | **int** | The HTTP status for the response | 

## Example

```python
from openapi_client.models.bad_response import BadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BadResponse from a JSON string
bad_response_instance = BadResponse.from_json(json)
# print the JSON string representation of the object
print(BadResponse.to_json())

# convert the object into a dict
bad_response_dict = bad_response_instance.to_dict()
# create an instance of BadResponse from a dict
bad_response_from_dict = BadResponse.from_dict(bad_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


