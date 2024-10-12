# JupyterConfig

Jupyter configuration for an interactive session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Optional. Display name, shown in the Jupyter kernelspec card. | [optional] 
**kernel** | **str** | Optional. Kernel | [optional] 

## Example

```python
from openapi_client.models.jupyter_config import JupyterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of JupyterConfig from a JSON string
jupyter_config_instance = JupyterConfig.from_json(json)
# print the JSON string representation of the object
print(JupyterConfig.to_json())

# convert the object into a dict
jupyter_config_dict = jupyter_config_instance.to_dict()
# create an instance of JupyterConfig from a dict
jupyter_config_from_dict = JupyterConfig.from_dict(jupyter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


