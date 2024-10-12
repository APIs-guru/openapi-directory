# CheckAvailabilityResource

Description of a CheckAvailability resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the id | [optional] 
**is_availiable** | **bool** | Gets or sets true if the name is available and can be used to create new Namespace/NotificationHub. Otherwise false. | [optional] 
**location** | **str** | Gets or sets datacenter location | [optional] 
**name** | **str** | Gets or sets name | [optional] 
**tags** | **Dict[str, str]** | Gets or sets tags | [optional] 
**type** | **str** | Gets or sets resource type | [optional] 

## Example

```python
from openapi_client.models.check_availability_resource import CheckAvailabilityResource

# TODO update the JSON string below
json = "{}"
# create an instance of CheckAvailabilityResource from a JSON string
check_availability_resource_instance = CheckAvailabilityResource.from_json(json)
# print the JSON string representation of the object
print(CheckAvailabilityResource.to_json())

# convert the object into a dict
check_availability_resource_dict = check_availability_resource_instance.to_dict()
# create an instance of CheckAvailabilityResource from a dict
check_availability_resource_from_dict = CheckAvailabilityResource.from_dict(check_availability_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


