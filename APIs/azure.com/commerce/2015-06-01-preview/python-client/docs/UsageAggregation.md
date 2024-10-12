# UsageAggregation

Describes the usageAggregation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique Id for the usage aggregate. | [optional] 
**name** | **str** | Name of the usage aggregate. | [optional] 
**properties** | [**UsageSample**](UsageSample.md) |  | [optional] 
**type** | **str** | Type of the resource being returned. | [optional] 

## Example

```python
from openapi_client.models.usage_aggregation import UsageAggregation

# TODO update the JSON string below
json = "{}"
# create an instance of UsageAggregation from a JSON string
usage_aggregation_instance = UsageAggregation.from_json(json)
# print the JSON string representation of the object
print(UsageAggregation.to_json())

# convert the object into a dict
usage_aggregation_dict = usage_aggregation_instance.to_dict()
# create an instance of UsageAggregation from a dict
usage_aggregation_from_dict = UsageAggregation.from_dict(usage_aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


