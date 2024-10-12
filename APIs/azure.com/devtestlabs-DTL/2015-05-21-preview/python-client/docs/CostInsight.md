# CostInsight


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the resource. | [optional] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] 
**properties** | [**CostInsightProperties**](CostInsightProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] 

## Example

```python
from openapi_client.models.cost_insight import CostInsight

# TODO update the JSON string below
json = "{}"
# create an instance of CostInsight from a JSON string
cost_insight_instance = CostInsight.from_json(json)
# print the JSON string representation of the object
print(CostInsight.to_json())

# convert the object into a dict
cost_insight_dict = cost_insight_instance.to_dict()
# create an instance of CostInsight from a dict
cost_insight_from_dict = CostInsight.from_dict(cost_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


