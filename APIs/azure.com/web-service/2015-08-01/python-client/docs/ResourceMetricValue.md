# ResourceMetricValue

Value of resource metric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Value average | [optional] 
**count** | **float** | Value count | [optional] 
**maximum** | **float** | Value maximum | [optional] 
**minimum** | **float** | Value minimum | [optional] 
**time_stamp** | **str** | Value timestamp | [optional] 
**total** | **float** | Value total | [optional] 

## Example

```python
from openapi_client.models.resource_metric_value import ResourceMetricValue

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMetricValue from a JSON string
resource_metric_value_instance = ResourceMetricValue.from_json(json)
# print the JSON string representation of the object
print(ResourceMetricValue.to_json())

# convert the object into a dict
resource_metric_value_dict = resource_metric_value_instance.to_dict()
# create an instance of ResourceMetricValue from a dict
resource_metric_value_from_dict = ResourceMetricValue.from_dict(resource_metric_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


