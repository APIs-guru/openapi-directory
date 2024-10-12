# CognitiveServicesAccount

Cognitive Services Account is an Azure resource representing the provisioned account, its type, location and SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Entity Tag | [optional] 
**id** | **str** | The id of the created account | [optional] 
**kind** | **str** | Type of cognitive service account. | [optional] 
**location** | **str** | The location of the resource | [optional] 
**name** | **str** | The name of the created account | [optional] 
**properties** | [**CognitiveServicesAccountProperties**](CognitiveServicesAccountProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.cognitive_services_account import CognitiveServicesAccount

# TODO update the JSON string below
json = "{}"
# create an instance of CognitiveServicesAccount from a JSON string
cognitive_services_account_instance = CognitiveServicesAccount.from_json(json)
# print the JSON string representation of the object
print(CognitiveServicesAccount.to_json())

# convert the object into a dict
cognitive_services_account_dict = cognitive_services_account_instance.to_dict()
# create an instance of CognitiveServicesAccount from a dict
cognitive_services_account_from_dict = CognitiveServicesAccount.from_dict(cognitive_services_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


