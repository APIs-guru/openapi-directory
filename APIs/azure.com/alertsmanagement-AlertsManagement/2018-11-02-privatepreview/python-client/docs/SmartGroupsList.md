# SmartGroupsList

List the alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to fetch the next set of alerts. | [optional] 
**value** | [**List[SmartGroup]**](SmartGroup.md) | List of alerts | [optional] 

## Example

```python
from openapi_client.models.smart_groups_list import SmartGroupsList

# TODO update the JSON string below
json = "{}"
# create an instance of SmartGroupsList from a JSON string
smart_groups_list_instance = SmartGroupsList.from_json(json)
# print the JSON string representation of the object
print(SmartGroupsList.to_json())

# convert the object into a dict
smart_groups_list_dict = smart_groups_list_instance.to_dict()
# create an instance of SmartGroupsList from a dict
smart_groups_list_from_dict = SmartGroupsList.from_dict(smart_groups_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


