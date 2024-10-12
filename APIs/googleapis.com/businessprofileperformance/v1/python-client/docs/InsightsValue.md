# InsightsValue

Represents an insights value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threshold** | **str** | Represents the threshold below which the actual value falls. | [optional] 
**value** | **str** | Represents the actual value. | [optional] 

## Example

```python
from openapi_client.models.insights_value import InsightsValue

# TODO update the JSON string below
json = "{}"
# create an instance of InsightsValue from a JSON string
insights_value_instance = InsightsValue.from_json(json)
# print the JSON string representation of the object
print(InsightsValue.to_json())

# convert the object into a dict
insights_value_dict = insights_value_instance.to_dict()
# create an instance of InsightsValue from a dict
insights_value_from_dict = InsightsValue.from_dict(insights_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


