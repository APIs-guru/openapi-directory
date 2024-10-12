# WannabePlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[WannabePlanFeature]**](WannabePlanFeature.md) |  | 
**name** | **str** |  | 
**price** | **int** |  | 
**slug** | **str** |  | 

## Example

```python
from openapi_client.models.wannabe_plan import WannabePlan

# TODO update the JSON string below
json = "{}"
# create an instance of WannabePlan from a JSON string
wannabe_plan_instance = WannabePlan.from_json(json)
# print the JSON string representation of the object
print(WannabePlan.to_json())

# convert the object into a dict
wannabe_plan_dict = wannabe_plan_instance.to_dict()
# create an instance of WannabePlan from a dict
wannabe_plan_from_dict = WannabePlan.from_dict(wannabe_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


