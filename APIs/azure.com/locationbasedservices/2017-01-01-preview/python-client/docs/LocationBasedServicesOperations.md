# LocationBasedServicesOperations

The set of operations available for Location Based Services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[LocationBasedServicesOperationsValueInner]**](LocationBasedServicesOperationsValueInner.md) | An operation available for Location Based Services. | [optional] [readonly] 

## Example

```python
from openapi_client.models.location_based_services_operations import LocationBasedServicesOperations

# TODO update the JSON string below
json = "{}"
# create an instance of LocationBasedServicesOperations from a JSON string
location_based_services_operations_instance = LocationBasedServicesOperations.from_json(json)
# print the JSON string representation of the object
print(LocationBasedServicesOperations.to_json())

# convert the object into a dict
location_based_services_operations_dict = location_based_services_operations_instance.to_dict()
# create an instance of LocationBasedServicesOperations from a dict
location_based_services_operations_from_dict = LocationBasedServicesOperations.from_dict(location_based_services_operations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


