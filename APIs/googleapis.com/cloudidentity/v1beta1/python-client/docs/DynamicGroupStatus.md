# DynamicGroupStatus

The current status of a dynamic group along with timestamp.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Status of the dynamic group. | [optional] 
**status_time** | **str** | The latest time at which the dynamic group is guaranteed to be in the given status. If status is &#x60;UP_TO_DATE&#x60;, the latest time at which the dynamic group was confirmed to be up-to-date. If status is &#x60;UPDATING_MEMBERSHIPS&#x60;, the time at which dynamic group was created. | [optional] 

## Example

```python
from openapi_client.models.dynamic_group_status import DynamicGroupStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicGroupStatus from a JSON string
dynamic_group_status_instance = DynamicGroupStatus.from_json(json)
# print the JSON string representation of the object
print(DynamicGroupStatus.to_json())

# convert the object into a dict
dynamic_group_status_dict = dynamic_group_status_instance.to_dict()
# create an instance of DynamicGroupStatus from a dict
dynamic_group_status_from_dict = DynamicGroupStatus.from_dict(dynamic_group_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


