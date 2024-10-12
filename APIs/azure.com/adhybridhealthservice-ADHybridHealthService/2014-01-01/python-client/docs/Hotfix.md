# Hotfix

The details of the hotfix installed in the server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installed_date** | **datetime** | The date and time, in UTC, when the KB was installed in the server. | [optional] 
**kb_name** | **str** | The name of the hotfix KB. | [optional] 
**link** | **str** | The link to the KB Article. | [optional] 

## Example

```python
from openapi_client.models.hotfix import Hotfix

# TODO update the JSON string below
json = "{}"
# create an instance of Hotfix from a JSON string
hotfix_instance = Hotfix.from_json(json)
# print the JSON string representation of the object
print(Hotfix.to_json())

# convert the object into a dict
hotfix_dict = hotfix_instance.to_dict()
# create an instance of Hotfix from a dict
hotfix_from_dict = Hotfix.from_dict(hotfix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


