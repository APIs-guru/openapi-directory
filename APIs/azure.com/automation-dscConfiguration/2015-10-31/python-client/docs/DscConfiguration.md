# DscConfiguration

Definition of the configuration type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets or sets the etag of the resource. | [optional] 
**properties** | [**DscConfigurationProperties**](DscConfigurationProperties.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dsc_configuration import DscConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DscConfiguration from a JSON string
dsc_configuration_instance = DscConfiguration.from_json(json)
# print the JSON string representation of the object
print(DscConfiguration.to_json())

# convert the object into a dict
dsc_configuration_dict = dsc_configuration_instance.to_dict()
# create an instance of DscConfiguration from a dict
dsc_configuration_from_dict = DscConfiguration.from_dict(dsc_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


