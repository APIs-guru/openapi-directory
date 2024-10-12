# ConfigFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The contents of the file. | [optional] 

## Example

```python
from openapi_client.models.config_file import ConfigFile

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigFile from a JSON string
config_file_instance = ConfigFile.from_json(json)
# print the JSON string representation of the object
print(ConfigFile.to_json())

# convert the object into a dict
config_file_dict = config_file_instance.to_dict()
# create an instance of ConfigFile from a dict
config_file_from_dict = ConfigFile.from_dict(config_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


