# StandardPostmarkResponse

A Postmark API error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **int** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.standard_postmark_response import StandardPostmarkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StandardPostmarkResponse from a JSON string
standard_postmark_response_instance = StandardPostmarkResponse.from_json(json)
# print the JSON string representation of the object
print(StandardPostmarkResponse.to_json())

# convert the object into a dict
standard_postmark_response_dict = standard_postmark_response_instance.to_dict()
# create an instance of StandardPostmarkResponse from a dict
standard_postmark_response_from_dict = StandardPostmarkResponse.from_dict(standard_postmark_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


