# MonitorRepository


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | deb, apk and rpm package managers should use an alias to indicate the target Operating System, for example &#39;debian:10&#39;. | [optional] 

## Example

```python
from openapi_client.models.monitor_repository import MonitorRepository

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorRepository from a JSON string
monitor_repository_instance = MonitorRepository.from_json(json)
# print the JSON string representation of the object
print(MonitorRepository.to_json())

# convert the object into a dict
monitor_repository_dict = monitor_repository_instance.to_dict()
# create an instance of MonitorRepository from a dict
monitor_repository_from_dict = MonitorRepository.from_dict(monitor_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


