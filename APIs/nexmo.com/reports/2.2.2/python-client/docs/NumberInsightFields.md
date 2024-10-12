# NumberInsightFields

Number Insight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Network used to send the request. | [optional] 
**number** | **str** | Search only request for the target number. | [optional] 
**product** | [**ProductNi**](ProductNi.md) |  | [optional] 

## Example

```python
from openapi_client.models.number_insight_fields import NumberInsightFields

# TODO update the JSON string below
json = "{}"
# create an instance of NumberInsightFields from a JSON string
number_insight_fields_instance = NumberInsightFields.from_json(json)
# print the JSON string representation of the object
print(NumberInsightFields.to_json())

# convert the object into a dict
number_insight_fields_dict = number_insight_fields_instance.to_dict()
# create an instance of NumberInsightFields from a dict
number_insight_fields_from_dict = NumberInsightFields.from_dict(number_insight_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


