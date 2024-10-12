# ConfigIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_file** | **str** |  | [optional] 
**issues** | **List[str]** |  | [optional] 
**service_name** | **str** |  | [optional] 
**suggestions** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.config_issue import ConfigIssue

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigIssue from a JSON string
config_issue_instance = ConfigIssue.from_json(json)
# print the JSON string representation of the object
print(ConfigIssue.to_json())

# convert the object into a dict
config_issue_dict = config_issue_instance.to_dict()
# create an instance of ConfigIssue from a dict
config_issue_from_dict = ConfigIssue.from_dict(config_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


