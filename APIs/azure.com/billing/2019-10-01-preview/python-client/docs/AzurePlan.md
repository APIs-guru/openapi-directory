# AzurePlan

Details about the azure plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku_description** | **str** | The sku description. | [optional] [readonly] 
**sku_id** | **str** | The sku id. | [optional] 

## Example

```python
from openapi_client.models.azure_plan import AzurePlan

# TODO update the JSON string below
json = "{}"
# create an instance of AzurePlan from a JSON string
azure_plan_instance = AzurePlan.from_json(json)
# print the JSON string representation of the object
print(AzurePlan.to_json())

# convert the object into a dict
azure_plan_dict = azure_plan_instance.to_dict()
# create an instance of AzurePlan from a dict
azure_plan_from_dict = AzurePlan.from_dict(azure_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


