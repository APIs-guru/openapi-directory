# SkuInformation

Storage SKU and its properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[SKUCapability]**](SKUCapability.md) | The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc. | [optional] [readonly] 
**kind** | **str** | Indicates the type of storage account. | [optional] [readonly] 
**locations** | **List[str]** | The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). | [optional] [readonly] 
**name** | **str** | The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType. | 
**resource_type** | **str** | The type of the resource, usually it is &#39;storageAccounts&#39;. | [optional] [readonly] 
**restrictions** | [**List[Restriction]**](Restriction.md) | The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. | [optional] 
**tier** | **str** | The SKU tier. This is based on the SKU name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_information import SkuInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SkuInformation from a JSON string
sku_information_instance = SkuInformation.from_json(json)
# print the JSON string representation of the object
print(SkuInformation.to_json())

# convert the object into a dict
sku_information_dict = sku_information_instance.to_dict()
# create an instance of SkuInformation from a dict
sku_information_from_dict = SkuInformation.from_dict(sku_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


