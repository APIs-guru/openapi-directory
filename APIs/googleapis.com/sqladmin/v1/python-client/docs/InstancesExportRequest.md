# InstancesExportRequest

Database instance export request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_context** | [**ExportContext**](ExportContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_export_request import InstancesExportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesExportRequest from a JSON string
instances_export_request_instance = InstancesExportRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesExportRequest.to_json())

# convert the object into a dict
instances_export_request_dict = instances_export_request_instance.to_dict()
# create an instance of InstancesExportRequest from a dict
instances_export_request_from_dict = InstancesExportRequest.from_dict(instances_export_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


