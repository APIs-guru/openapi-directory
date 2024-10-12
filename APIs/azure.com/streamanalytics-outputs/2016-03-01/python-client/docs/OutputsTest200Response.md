# OutputsTest200Response

Describes the status of the test operation along with error information, if applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**OutputsTest200ResponseError**](OutputsTest200ResponseError.md) |  | [optional] 
**status** | **str** | The status of the test operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.outputs_test200_response import OutputsTest200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OutputsTest200Response from a JSON string
outputs_test200_response_instance = OutputsTest200Response.from_json(json)
# print the JSON string representation of the object
print(OutputsTest200Response.to_json())

# convert the object into a dict
outputs_test200_response_dict = outputs_test200_response_instance.to_dict()
# create an instance of OutputsTest200Response from a dict
outputs_test200_response_from_dict = OutputsTest200Response.from_dict(outputs_test200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


