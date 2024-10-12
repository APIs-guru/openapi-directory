# ChangeReport

Change report associated with a particular service configuration. It contains a list of ConfigChanges based on the comparison between two service configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_changes** | [**List[ConfigChange]**](ConfigChange.md) | List of changes between two service configurations. The changes will be alphabetically sorted based on the identifier of each change. A ConfigChange identifier is a dot separated path to the configuration. Example: visibility.rules[selector&#x3D;&#39;LibraryService.CreateBook&#39;].restriction | [optional] 

## Example

```python
from openapi_client.models.change_report import ChangeReport

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeReport from a JSON string
change_report_instance = ChangeReport.from_json(json)
# print the JSON string representation of the object
print(ChangeReport.to_json())

# convert the object into a dict
change_report_dict = change_report_instance.to_dict()
# create an instance of ChangeReport from a dict
change_report_from_dict = ChangeReport.from_dict(change_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


