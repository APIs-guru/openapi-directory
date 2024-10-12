# ResetConfig

contains information about how a reset was configured. only populated if the job was a reset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**streams_to_reset** | [**List[StreamDescriptor]**](StreamDescriptor.md) |  | [optional] 

## Example

```python
from openapi_client.models.reset_config import ResetConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ResetConfig from a JSON string
reset_config_instance = ResetConfig.from_json(json)
# print the JSON string representation of the object
print(ResetConfig.to_json())

# convert the object into a dict
reset_config_dict = reset_config_instance.to_dict()
# create an instance of ResetConfig from a dict
reset_config_from_dict = ResetConfig.from_dict(reset_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


