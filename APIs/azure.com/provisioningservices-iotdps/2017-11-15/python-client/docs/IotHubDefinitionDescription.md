# IotHubDefinitionDescription

Description of the IoT hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_weight** | **int** | weight to apply for a given iot h. | [optional] 
**apply_allocation_policy** | **bool** | flag for applying allocationPolicy or not for a given iot hub. | [optional] 
**connection_string** | **str** | Connection string og the IoT hub. | 
**location** | **str** | ARM region of the IoT hub. | 
**name** | **str** | Host name of the IoT hub. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iot_hub_definition_description import IotHubDefinitionDescription

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubDefinitionDescription from a JSON string
iot_hub_definition_description_instance = IotHubDefinitionDescription.from_json(json)
# print the JSON string representation of the object
print(IotHubDefinitionDescription.to_json())

# convert the object into a dict
iot_hub_definition_description_dict = iot_hub_definition_description_instance.to_dict()
# create an instance of IotHubDefinitionDescription from a dict
iot_hub_definition_description_from_dict = IotHubDefinitionDescription.from_dict(iot_hub_definition_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


