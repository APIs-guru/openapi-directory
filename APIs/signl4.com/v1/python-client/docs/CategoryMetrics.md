# CategoryMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** |  | [optional] 
**last24_hours** | **int** |  | [optional] 
**last_alert** | **datetime** |  | [optional] 
**subscriber_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.category_metrics import CategoryMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryMetrics from a JSON string
category_metrics_instance = CategoryMetrics.from_json(json)
# print the JSON string representation of the object
print(CategoryMetrics.to_json())

# convert the object into a dict
category_metrics_dict = category_metrics_instance.to_dict()
# create an instance of CategoryMetrics from a dict
category_metrics_from_dict = CategoryMetrics.from_dict(category_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


