# AutomaticTuningServerProperties

Server-level Automatic Tuning properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_state** | **str** | Automatic tuning actual state. | [optional] [readonly] 
**desired_state** | **str** | Automatic tuning desired state. | [optional] 
**options** | [**Dict[str, AutomaticTuningServerOptions]**](AutomaticTuningServerOptions.md) | Automatic tuning options definition. | [optional] 

## Example

```python
from openapi_client.models.automatic_tuning_server_properties import AutomaticTuningServerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AutomaticTuningServerProperties from a JSON string
automatic_tuning_server_properties_instance = AutomaticTuningServerProperties.from_json(json)
# print the JSON string representation of the object
print(AutomaticTuningServerProperties.to_json())

# convert the object into a dict
automatic_tuning_server_properties_dict = automatic_tuning_server_properties_instance.to_dict()
# create an instance of AutomaticTuningServerProperties from a dict
automatic_tuning_server_properties_from_dict = AutomaticTuningServerProperties.from_dict(automatic_tuning_server_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


