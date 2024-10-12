# ServiceTypeHealthPolicyMapItem

Defines an item in ServiceTypeHealthPolicyMap.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the service type health policy map item. This is the name of the service type. | 
**value** | [**ServiceTypeHealthPolicy**](ServiceTypeHealthPolicy.md) |  | 

## Example

```python
from openapi_client.models.service_type_health_policy_map_item import ServiceTypeHealthPolicyMapItem

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTypeHealthPolicyMapItem from a JSON string
service_type_health_policy_map_item_instance = ServiceTypeHealthPolicyMapItem.from_json(json)
# print the JSON string representation of the object
print(ServiceTypeHealthPolicyMapItem.to_json())

# convert the object into a dict
service_type_health_policy_map_item_dict = service_type_health_policy_map_item_instance.to_dict()
# create an instance of ServiceTypeHealthPolicyMapItem from a dict
service_type_health_policy_map_item_from_dict = ServiceTypeHealthPolicyMapItem.from_dict(service_type_health_policy_map_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


