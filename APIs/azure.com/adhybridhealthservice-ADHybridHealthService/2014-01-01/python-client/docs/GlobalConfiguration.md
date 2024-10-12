# GlobalConfiguration

The global configuration settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_set** | [**List[Item]**](Item.md) | The list of additional feature sets. | [optional] 
**num_saved_pwd_event** | **int** | The number of saved password events. | [optional] 
**password_sync_enabled** | **bool** | Indicates if password sync is enabled or not. | [optional] 
**schema_xml** | **str** | The schema for the configuration. | [optional] 
**version** | **int** | The version for the global configuration. | [optional] 

## Example

```python
from openapi_client.models.global_configuration import GlobalConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalConfiguration from a JSON string
global_configuration_instance = GlobalConfiguration.from_json(json)
# print the JSON string representation of the object
print(GlobalConfiguration.to_json())

# convert the object into a dict
global_configuration_dict = global_configuration_instance.to_dict()
# create an instance of GlobalConfiguration from a dict
global_configuration_from_dict = GlobalConfiguration.from_dict(global_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


