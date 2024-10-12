# SmartGroupModificationProperties

Properties of the smartGroup modification item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modifications** | [**List[SmartGroupModificationItem]**](SmartGroupModificationItem.md) | Modification details | [optional] 
**next_link** | **str** | URL to fetch the next set of results. | [optional] 
**smart_group_id** | **str** | Unique Id of the smartGroup for which the history is being retrieved | [optional] [readonly] 

## Example

```python
from openapi_client.models.smart_group_modification_properties import SmartGroupModificationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SmartGroupModificationProperties from a JSON string
smart_group_modification_properties_instance = SmartGroupModificationProperties.from_json(json)
# print the JSON string representation of the object
print(SmartGroupModificationProperties.to_json())

# convert the object into a dict
smart_group_modification_properties_dict = smart_group_modification_properties_instance.to_dict()
# create an instance of SmartGroupModificationProperties from a dict
smart_group_modification_properties_from_dict = SmartGroupModificationProperties.from_dict(smart_group_modification_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


