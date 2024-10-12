# TroubleshootingParameters

Parameters that define the resource to troubleshoot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TroubleshootingProperties**](TroubleshootingProperties.md) |  | 
**target_resource_id** | **str** | The target resource to troubleshoot. | 

## Example

```python
from openapi_client.models.troubleshooting_parameters import TroubleshootingParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TroubleshootingParameters from a JSON string
troubleshooting_parameters_instance = TroubleshootingParameters.from_json(json)
# print the JSON string representation of the object
print(TroubleshootingParameters.to_json())

# convert the object into a dict
troubleshooting_parameters_dict = troubleshooting_parameters_instance.to_dict()
# create an instance of TroubleshootingParameters from a dict
troubleshooting_parameters_from_dict = TroubleshootingParameters.from_dict(troubleshooting_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


