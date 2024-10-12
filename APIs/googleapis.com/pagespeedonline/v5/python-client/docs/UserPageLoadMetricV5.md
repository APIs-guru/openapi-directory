# UserPageLoadMetricV5

A CrUX metric object for a single metric and form factor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the specific time metric. | [optional] 
**distributions** | [**List[Bucket]**](Bucket.md) | Metric distributions. Proportions should sum up to 1. | [optional] 
**form_factor** | **str** | Identifies the form factor of the metric being collected. | [optional] 
**median** | **int** | The median number of the metric, in millisecond. | [optional] 
**metric_id** | **str** | Identifies the type of the metric. | [optional] 
**percentile** | **int** | We use this field to store certain percentile value for this metric. For v4, this field contains pc50. For v5, this field contains pc90. | [optional] 

## Example

```python
from openapi_client.models.user_page_load_metric_v5 import UserPageLoadMetricV5

# TODO update the JSON string below
json = "{}"
# create an instance of UserPageLoadMetricV5 from a JSON string
user_page_load_metric_v5_instance = UserPageLoadMetricV5.from_json(json)
# print the JSON string representation of the object
print(UserPageLoadMetricV5.to_json())

# convert the object into a dict
user_page_load_metric_v5_dict = user_page_load_metric_v5_instance.to_dict()
# create an instance of UserPageLoadMetricV5 from a dict
user_page_load_metric_v5_from_dict = UserPageLoadMetricV5.from_dict(user_page_load_metric_v5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


