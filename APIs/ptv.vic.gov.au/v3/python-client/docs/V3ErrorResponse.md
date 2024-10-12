# V3ErrorResponse

An error response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Error message | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_error_response import V3ErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3ErrorResponse from a JSON string
v3_error_response_instance = V3ErrorResponse.from_json(json)
# print the JSON string representation of the object
print(V3ErrorResponse.to_json())

# convert the object into a dict
v3_error_response_dict = v3_error_response_instance.to_dict()
# create an instance of V3ErrorResponse from a dict
v3_error_response_from_dict = V3ErrorResponse.from_dict(v3_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


