# ServiceLoadMetricDescription

The description of the service load metric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**primary_default_load** | **int** |  | [optional] 
**secondary_default_load** | **int** |  | [optional] 
**service_load_metric_weight** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service_load_metric_description import ServiceLoadMetricDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceLoadMetricDescription from a JSON string
service_load_metric_description_instance = ServiceLoadMetricDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceLoadMetricDescription.to_json())

# convert the object into a dict
service_load_metric_description_dict = service_load_metric_description_instance.to_dict()
# create an instance of ServiceLoadMetricDescription from a dict
service_load_metric_description_from_dict = ServiceLoadMetricDescription.from_dict(service_load_metric_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


