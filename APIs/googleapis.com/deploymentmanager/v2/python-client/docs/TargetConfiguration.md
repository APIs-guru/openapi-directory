# TargetConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ConfigFile**](ConfigFile.md) |  | [optional] 
**imports** | [**List[ImportFile]**](ImportFile.md) | Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template. | [optional] 

## Example

```python
from openapi_client.models.target_configuration import TargetConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of TargetConfiguration from a JSON string
target_configuration_instance = TargetConfiguration.from_json(json)
# print the JSON string representation of the object
print(TargetConfiguration.to_json())

# convert the object into a dict
target_configuration_dict = target_configuration_instance.to_dict()
# create an instance of TargetConfiguration from a dict
target_configuration_from_dict = TargetConfiguration.from_dict(target_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


