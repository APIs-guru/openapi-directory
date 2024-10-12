# CheckInResponse

The response to the CheckIn method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deadline** | **str** | The deadline by which the worker must request an extension. The backend will allow for network transmission time and other delays, but the worker must attempt to transmit the extension request no later than the deadline. | [optional] 
**features** | **Dict[str, object]** | Feature configuration for the operation. | [optional] 
**metadata** | **Dict[str, object]** | The metadata that describes the operation assigned to the worker. | [optional] 

## Example

```python
from openapi_client.models.check_in_response import CheckInResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckInResponse from a JSON string
check_in_response_instance = CheckInResponse.from_json(json)
# print the JSON string representation of the object
print(CheckInResponse.to_json())

# convert the object into a dict
check_in_response_dict = check_in_response_instance.to_dict()
# create an instance of CheckInResponse from a dict
check_in_response_from_dict = CheckInResponse.from_dict(check_in_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


