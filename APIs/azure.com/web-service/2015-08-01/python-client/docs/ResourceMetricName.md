# ResourceMetricName

Name of a metric for any resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | Localized metric name value | [optional] 
**value** | **str** | metric name value | [optional] 

## Example

```python
from openapi_client.models.resource_metric_name import ResourceMetricName

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMetricName from a JSON string
resource_metric_name_instance = ResourceMetricName.from_json(json)
# print the JSON string representation of the object
print(ResourceMetricName.to_json())

# convert the object into a dict
resource_metric_name_dict = resource_metric_name_instance.to_dict()
# create an instance of ResourceMetricName from a dict
resource_metric_name_from_dict = ResourceMetricName.from_dict(resource_metric_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


