# ComputerVisionError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | 
**message** | **str** | A message explaining the error reported by the service. | 
**request_id** | **str** | A unique request identifier. | [optional] 

## Example

```python
from openapi_client.models.computer_vision_error import ComputerVisionError

# TODO update the JSON string below
json = "{}"
# create an instance of ComputerVisionError from a JSON string
computer_vision_error_instance = ComputerVisionError.from_json(json)
# print the JSON string representation of the object
print(ComputerVisionError.to_json())

# convert the object into a dict
computer_vision_error_dict = computer_vision_error_instance.to_dict()
# create an instance of ComputerVisionError from a dict
computer_vision_error_from_dict = ComputerVisionError.from_dict(computer_vision_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


