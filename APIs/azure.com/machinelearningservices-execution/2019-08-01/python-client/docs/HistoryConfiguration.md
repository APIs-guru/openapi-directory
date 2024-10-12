# HistoryConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directories_to_watch** | **List[str]** | The list of directories to monitor and upload files from. | [optional] 
**output_collection** | **bool** | Set to true to collect outputs and store in run history. | [optional] 

## Example

```python
from openapi_client.models.history_configuration import HistoryConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryConfiguration from a JSON string
history_configuration_instance = HistoryConfiguration.from_json(json)
# print the JSON string representation of the object
print(HistoryConfiguration.to_json())

# convert the object into a dict
history_configuration_dict = history_configuration_instance.to_dict()
# create an instance of HistoryConfiguration from a dict
history_configuration_from_dict = HistoryConfiguration.from_dict(history_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


