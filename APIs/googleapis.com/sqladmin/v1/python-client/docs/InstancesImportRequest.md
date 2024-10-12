# InstancesImportRequest

Database instance import request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**import_context** | [**ImportContext**](ImportContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_import_request import InstancesImportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesImportRequest from a JSON string
instances_import_request_instance = InstancesImportRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesImportRequest.to_json())

# convert the object into a dict
instances_import_request_dict = instances_import_request_instance.to_dict()
# create an instance of InstancesImportRequest from a dict
instances_import_request_from_dict = InstancesImportRequest.from_dict(instances_import_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


