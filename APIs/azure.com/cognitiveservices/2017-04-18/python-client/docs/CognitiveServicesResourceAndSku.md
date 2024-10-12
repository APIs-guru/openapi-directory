# CognitiveServicesResourceAndSku

Cognitive Services resource type and SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_type** | **str** | Resource Namespace and Type | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 

## Example

```python
from openapi_client.models.cognitive_services_resource_and_sku import CognitiveServicesResourceAndSku

# TODO update the JSON string below
json = "{}"
# create an instance of CognitiveServicesResourceAndSku from a JSON string
cognitive_services_resource_and_sku_instance = CognitiveServicesResourceAndSku.from_json(json)
# print the JSON string representation of the object
print(CognitiveServicesResourceAndSku.to_json())

# convert the object into a dict
cognitive_services_resource_and_sku_dict = cognitive_services_resource_and_sku_instance.to_dict()
# create an instance of CognitiveServicesResourceAndSku from a dict
cognitive_services_resource_and_sku_from_dict = CognitiveServicesResourceAndSku.from_dict(cognitive_services_resource_and_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


