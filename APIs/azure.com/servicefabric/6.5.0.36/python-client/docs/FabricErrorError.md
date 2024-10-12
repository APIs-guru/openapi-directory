# FabricErrorError

Error object containing error code and error message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**FabricErrorCodes**](FabricErrorCodes.md) |  | 
**message** | **str** | Error message. | [optional] 

## Example

```python
from openapi_client.models.fabric_error_error import FabricErrorError

# TODO update the JSON string below
json = "{}"
# create an instance of FabricErrorError from a JSON string
fabric_error_error_instance = FabricErrorError.from_json(json)
# print the JSON string representation of the object
print(FabricErrorError.to_json())

# convert the object into a dict
fabric_error_error_dict = fabric_error_error_instance.to_dict()
# create an instance of FabricErrorError from a dict
fabric_error_error_from_dict = FabricErrorError.from_dict(fabric_error_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


