# RuntimeConfig

A RuntimeConfig resource is the primary resource in the Cloud RuntimeConfig service. A RuntimeConfig resource consists of metadata and a hierarchy of variables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | An optional description of the RuntimeConfig object. | [optional] 
**name** | **str** | The resource name of a runtime config. The name must have the format: projects/[PROJECT_ID]/configs/[CONFIG_NAME] The &#x60;[PROJECT_ID]&#x60; must be a valid project ID, and &#x60;[CONFIG_NAME]&#x60; is an arbitrary name that matches the &#x60;[0-9A-Za-z](?:[_.A-Za-z0-9-]{0,62}[_.A-Za-z0-9])?&#x60; regular expression. The length of &#x60;[CONFIG_NAME]&#x60; must be less than 64 characters. You pick the RuntimeConfig resource name, but the server will validate that the name adheres to this format. After you create the resource, you cannot change the resource&#39;s name. | [optional] 

## Example

```python
from openapi_client.models.runtime_config import RuntimeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeConfig from a JSON string
runtime_config_instance = RuntimeConfig.from_json(json)
# print the JSON string representation of the object
print(RuntimeConfig.to_json())

# convert the object into a dict
runtime_config_dict = runtime_config_instance.to_dict()
# create an instance of RuntimeConfig from a dict
runtime_config_from_dict = RuntimeConfig.from_dict(runtime_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


