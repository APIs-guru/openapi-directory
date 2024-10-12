# CostInsightProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** |  | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**vm_costs** | [**List[VMCostProperties]**](VMCostProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.cost_insight_properties import CostInsightProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CostInsightProperties from a JSON string
cost_insight_properties_instance = CostInsightProperties.from_json(json)
# print the JSON string representation of the object
print(CostInsightProperties.to_json())

# convert the object into a dict
cost_insight_properties_dict = cost_insight_properties_instance.to_dict()
# create an instance of CostInsightProperties from a dict
cost_insight_properties_from_dict = CostInsightProperties.from_dict(cost_insight_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


