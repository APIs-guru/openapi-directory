# CrashGroupsContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | Cassandra request continuation token. The token is used for pagination. | [optional] 
**crash_groups** | [**List[CrashGroupsList200ResponseCrashGroupsInner]**](CrashGroupsList200ResponseCrashGroupsInner.md) |  | 
**limited_result_set** | **bool** |  | 

## Example

```python
from openapi_client.models.crash_groups_container import CrashGroupsContainer

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupsContainer from a JSON string
crash_groups_container_instance = CrashGroupsContainer.from_json(json)
# print the JSON string representation of the object
print(CrashGroupsContainer.to_json())

# convert the object into a dict
crash_groups_container_dict = crash_groups_container_instance.to_dict()
# create an instance of CrashGroupsContainer from a dict
crash_groups_container_from_dict = CrashGroupsContainer.from_dict(crash_groups_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


