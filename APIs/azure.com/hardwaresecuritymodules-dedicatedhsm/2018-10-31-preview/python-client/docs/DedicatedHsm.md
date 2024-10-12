# DedicatedHsm

Resource information with extended details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DedicatedHsmProperties**](DedicatedHsmProperties.md) |  | 
**id** | **str** | The Azure Resource Manager resource ID for the dedicated HSM. | [optional] [readonly] 
**location** | **str** | The supported Azure location where the dedicated HSM should be created. | 
**name** | **str** | The name of the dedicated HSM. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | The resource type of the dedicated HSM. | [optional] [readonly] 
**zones** | **List[str]** | The Dedicated Hsm zones. | [optional] 

## Example

```python
from openapi_client.models.dedicated_hsm import DedicatedHsm

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHsm from a JSON string
dedicated_hsm_instance = DedicatedHsm.from_json(json)
# print the JSON string representation of the object
print(DedicatedHsm.to_json())

# convert the object into a dict
dedicated_hsm_dict = dedicated_hsm_instance.to_dict()
# create an instance of DedicatedHsm from a dict
dedicated_hsm_from_dict = DedicatedHsm.from_dict(dedicated_hsm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


