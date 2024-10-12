# ManagedService

The full representation of a Service that is managed by Google Service Management.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**producer_project_id** | **str** | ID of the project that produces and owns this service. | [optional] 
**service_name** | **str** | The name of the service. See the [overview](https://cloud.google.com/service-infrastructure/docs/overview) for naming requirements. | [optional] 

## Example

```python
from openapi_client.models.managed_service import ManagedService

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedService from a JSON string
managed_service_instance = ManagedService.from_json(json)
# print the JSON string representation of the object
print(ManagedService.to_json())

# convert the object into a dict
managed_service_dict = managed_service_instance.to_dict()
# create an instance of ManagedService from a dict
managed_service_from_dict = ManagedService.from_dict(managed_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


