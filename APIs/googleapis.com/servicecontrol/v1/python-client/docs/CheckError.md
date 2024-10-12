# CheckError

Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check_errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**detail** | **str** | Free-form text providing details on the error cause of the error. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**subject** | **str** | Subject to whom this error applies. See the specific code enum for more details on this field. For example: - \&quot;project:\&quot; - \&quot;folder:\&quot; - \&quot;organization:\&quot; | [optional] 

## Example

```python
from openapi_client.models.check_error import CheckError

# TODO update the JSON string below
json = "{}"
# create an instance of CheckError from a JSON string
check_error_instance = CheckError.from_json(json)
# print the JSON string representation of the object
print(CheckError.to_json())

# convert the object into a dict
check_error_dict = check_error_instance.to_dict()
# create an instance of CheckError from a dict
check_error_from_dict = CheckError.from_dict(check_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


