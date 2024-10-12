# ExportInstanceRequest

Request for Export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_config** | [**OutputConfig**](OutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_instance_request import ExportInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportInstanceRequest from a JSON string
export_instance_request_instance = ExportInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(ExportInstanceRequest.to_json())

# convert the object into a dict
export_instance_request_dict = export_instance_request_instance.to_dict()
# create an instance of ExportInstanceRequest from a dict
export_instance_request_from_dict = ExportInstanceRequest.from_dict(export_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


