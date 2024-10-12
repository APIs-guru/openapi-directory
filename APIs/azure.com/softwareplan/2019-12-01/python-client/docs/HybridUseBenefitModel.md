# HybridUseBenefitModel

Response on GET of a hybrid use benefit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **int** | Indicates the revision of the hybrid use benefit | [optional] [readonly] 
**properties** | [**HybridUseBenefitProperties**](HybridUseBenefitProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hybrid_use_benefit_model import HybridUseBenefitModel

# TODO update the JSON string below
json = "{}"
# create an instance of HybridUseBenefitModel from a JSON string
hybrid_use_benefit_model_instance = HybridUseBenefitModel.from_json(json)
# print the JSON string representation of the object
print(HybridUseBenefitModel.to_json())

# convert the object into a dict
hybrid_use_benefit_model_dict = hybrid_use_benefit_model_instance.to_dict()
# create an instance of HybridUseBenefitModel from a dict
hybrid_use_benefit_model_from_dict = HybridUseBenefitModel.from_dict(hybrid_use_benefit_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


