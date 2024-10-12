# CognitiveServicesAccountCreateParameters

The parameters to provide for the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Required. Indicates the type of cognitive service account. | 
**location** | **str** | Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update the request will succeed. | 
**properties** | **object** | required empty properties object. Must be an empty object, and must exist in the request. | 
**sku** | [**Sku**](Sku.md) |  | 
**tags** | **Dict[str, str]** | Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. | [optional] 

## Example

```python
from openapi_client.models.cognitive_services_account_create_parameters import CognitiveServicesAccountCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CognitiveServicesAccountCreateParameters from a JSON string
cognitive_services_account_create_parameters_instance = CognitiveServicesAccountCreateParameters.from_json(json)
# print the JSON string representation of the object
print(CognitiveServicesAccountCreateParameters.to_json())

# convert the object into a dict
cognitive_services_account_create_parameters_dict = cognitive_services_account_create_parameters_instance.to_dict()
# create an instance of CognitiveServicesAccountCreateParameters from a dict
cognitive_services_account_create_parameters_from_dict = CognitiveServicesAccountCreateParameters.from_dict(cognitive_services_account_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


