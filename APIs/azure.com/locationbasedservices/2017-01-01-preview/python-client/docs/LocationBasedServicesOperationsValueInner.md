# LocationBasedServicesOperationsValueInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**LocationBasedServicesOperationsValueInnerDisplay**](LocationBasedServicesOperationsValueInnerDisplay.md) |  | [optional] 
**name** | **str** | Operation name: {provider}/{resource}/{operation}. | [optional] [readonly] 
**origin** | **str** | The origin of the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.location_based_services_operations_value_inner import LocationBasedServicesOperationsValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of LocationBasedServicesOperationsValueInner from a JSON string
location_based_services_operations_value_inner_instance = LocationBasedServicesOperationsValueInner.from_json(json)
# print the JSON string representation of the object
print(LocationBasedServicesOperationsValueInner.to_json())

# convert the object into a dict
location_based_services_operations_value_inner_dict = location_based_services_operations_value_inner_instance.to_dict()
# create an instance of LocationBasedServicesOperationsValueInner from a dict
location_based_services_operations_value_inner_from_dict = LocationBasedServicesOperationsValueInner.from_dict(location_based_services_operations_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


