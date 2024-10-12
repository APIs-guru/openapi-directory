# ConnectModules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modules** | **List[object]** | A list of app modules in the same format as the &#x60;modules&#x60; property in the [app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/). | 

## Example

```python
from openapi_client.models.connect_modules import ConnectModules

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectModules from a JSON string
connect_modules_instance = ConnectModules.from_json(json)
# print the JSON string representation of the object
print(ConnectModules.to_json())

# convert the object into a dict
connect_modules_dict = connect_modules_instance.to_dict()
# create an instance of ConnectModules from a dict
connect_modules_from_dict = ConnectModules.from_dict(connect_modules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


