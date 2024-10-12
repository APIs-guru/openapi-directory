# V2FailureResponse

failure response object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from openapi_client.models.v2_failure_response import V2FailureResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2FailureResponse from a JSON string
v2_failure_response_instance = V2FailureResponse.from_json(json)
# print the JSON string representation of the object
print(V2FailureResponse.to_json())

# convert the object into a dict
v2_failure_response_dict = v2_failure_response_instance.to_dict()
# create an instance of V2FailureResponse from a dict
v2_failure_response_from_dict = V2FailureResponse.from_dict(v2_failure_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


