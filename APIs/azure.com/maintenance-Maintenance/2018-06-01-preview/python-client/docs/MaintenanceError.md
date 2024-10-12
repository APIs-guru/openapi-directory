# MaintenanceError

An error response received from the Azure Maintenance service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ErrorDetails**](ErrorDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.maintenance_error import MaintenanceError

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceError from a JSON string
maintenance_error_instance = MaintenanceError.from_json(json)
# print the JSON string representation of the object
print(MaintenanceError.to_json())

# convert the object into a dict
maintenance_error_dict = maintenance_error_instance.to_dict()
# create an instance of MaintenanceError from a dict
maintenance_error_from_dict = MaintenanceError.from_dict(maintenance_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


