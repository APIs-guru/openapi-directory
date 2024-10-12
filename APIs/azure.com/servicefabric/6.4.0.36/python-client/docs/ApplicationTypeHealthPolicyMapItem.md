# ApplicationTypeHealthPolicyMapItem

Defines an item in ApplicationTypeHealthPolicyMap.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the application type health policy map item. This is the name of the application type. | 
**value** | **int** | The value of the application type health policy map item. The max percent unhealthy applications allowed for the application type. Must be between zero and 100. | 

## Example

```python
from openapi_client.models.application_type_health_policy_map_item import ApplicationTypeHealthPolicyMapItem

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeHealthPolicyMapItem from a JSON string
application_type_health_policy_map_item_instance = ApplicationTypeHealthPolicyMapItem.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeHealthPolicyMapItem.to_json())

# convert the object into a dict
application_type_health_policy_map_item_dict = application_type_health_policy_map_item_instance.to_dict()
# create an instance of ApplicationTypeHealthPolicyMapItem from a dict
application_type_health_policy_map_item_from_dict = ApplicationTypeHealthPolicyMapItem.from_dict(application_type_health_policy_map_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


