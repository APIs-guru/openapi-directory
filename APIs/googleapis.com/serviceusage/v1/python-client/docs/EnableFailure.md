# EnableFailure

Provides error messages for the failing services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | An error message describing why the service could not be enabled. | [optional] 
**service_id** | **str** | The service id of a service that could not be enabled. | [optional] 

## Example

```python
from openapi_client.models.enable_failure import EnableFailure

# TODO update the JSON string below
json = "{}"
# create an instance of EnableFailure from a JSON string
enable_failure_instance = EnableFailure.from_json(json)
# print the JSON string representation of the object
print(EnableFailure.to_json())

# convert the object into a dict
enable_failure_dict = enable_failure_instance.to_dict()
# create an instance of EnableFailure from a dict
enable_failure_from_dict = EnableFailure.from_dict(enable_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


