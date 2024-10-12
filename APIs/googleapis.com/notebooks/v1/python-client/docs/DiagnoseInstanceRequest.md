# DiagnoseInstanceRequest

Request for creating a notebook instance diagnostic file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diagnostic_config** | [**DiagnosticConfig**](DiagnosticConfig.md) |  | [optional] 
**timeout_minutes** | **int** | Optional. Maxmium amount of time in minutes before the operation times out. | [optional] 

## Example

```python
from openapi_client.models.diagnose_instance_request import DiagnoseInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnoseInstanceRequest from a JSON string
diagnose_instance_request_instance = DiagnoseInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(DiagnoseInstanceRequest.to_json())

# convert the object into a dict
diagnose_instance_request_dict = diagnose_instance_request_instance.to_dict()
# create an instance of DiagnoseInstanceRequest from a dict
diagnose_instance_request_from_dict = DiagnoseInstanceRequest.from_dict(diagnose_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


