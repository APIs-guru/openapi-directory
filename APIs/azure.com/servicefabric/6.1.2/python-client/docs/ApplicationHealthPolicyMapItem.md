# ApplicationHealthPolicyMapItem

Defines an item in ApplicationHealthPolicyMap. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | 
**value** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md) |  | 

## Example

```python
from openapi_client.models.application_health_policy_map_item import ApplicationHealthPolicyMapItem

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthPolicyMapItem from a JSON string
application_health_policy_map_item_instance = ApplicationHealthPolicyMapItem.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthPolicyMapItem.to_json())

# convert the object into a dict
application_health_policy_map_item_dict = application_health_policy_map_item_instance.to_dict()
# create an instance of ApplicationHealthPolicyMapItem from a dict
application_health_policy_map_item_from_dict = ApplicationHealthPolicyMapItem.from_dict(application_health_policy_map_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


