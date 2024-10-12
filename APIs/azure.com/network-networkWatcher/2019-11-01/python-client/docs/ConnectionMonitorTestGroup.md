# ConnectionMonitorTestGroup

Describes the connection monitor test group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | **List[str]** | List of destination endpoint names. | 
**disable** | **bool** | Value indicating whether test group is disabled. | [optional] 
**name** | **str** | The name of the connection monitor test group. | 
**sources** | **List[str]** | List of source endpoint names. | 
**test_configurations** | **List[str]** | List of test configuration names. | 

## Example

```python
from openapi_client.models.connection_monitor_test_group import ConnectionMonitorTestGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorTestGroup from a JSON string
connection_monitor_test_group_instance = ConnectionMonitorTestGroup.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorTestGroup.to_json())

# convert the object into a dict
connection_monitor_test_group_dict = connection_monitor_test_group_instance.to_dict()
# create an instance of ConnectionMonitorTestGroup from a dict
connection_monitor_test_group_from_dict = ConnectionMonitorTestGroup.from_dict(connection_monitor_test_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


