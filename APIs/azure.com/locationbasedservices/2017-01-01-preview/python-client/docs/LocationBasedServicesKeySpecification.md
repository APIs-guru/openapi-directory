# LocationBasedServicesKeySpecification

Whether the operation refers to the primary or secondary key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | **str** | Whether the operation refers to the primary or secondary key. | 

## Example

```python
from openapi_client.models.location_based_services_key_specification import LocationBasedServicesKeySpecification

# TODO update the JSON string below
json = "{}"
# create an instance of LocationBasedServicesKeySpecification from a JSON string
location_based_services_key_specification_instance = LocationBasedServicesKeySpecification.from_json(json)
# print the JSON string representation of the object
print(LocationBasedServicesKeySpecification.to_json())

# convert the object into a dict
location_based_services_key_specification_dict = location_based_services_key_specification_instance.to_dict()
# create an instance of LocationBasedServicesKeySpecification from a dict
location_based_services_key_specification_from_dict = LocationBasedServicesKeySpecification.from_dict(location_based_services_key_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


