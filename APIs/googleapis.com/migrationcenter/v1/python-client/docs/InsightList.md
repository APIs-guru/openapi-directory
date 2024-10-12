# InsightList

Message containing insights list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insights** | [**List[Insight]**](Insight.md) | Output only. Insights of the list. | [optional] [readonly] 
**update_time** | **str** | Output only. Update timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.insight_list import InsightList

# TODO update the JSON string below
json = "{}"
# create an instance of InsightList from a JSON string
insight_list_instance = InsightList.from_json(json)
# print the JSON string representation of the object
print(InsightList.to_json())

# convert the object into a dict
insight_list_dict = insight_list_instance.to_dict()
# create an instance of InsightList from a dict
insight_list_from_dict = InsightList.from_dict(insight_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


