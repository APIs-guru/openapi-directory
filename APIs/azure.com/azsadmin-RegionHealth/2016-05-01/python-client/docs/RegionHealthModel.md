# RegionHealthModel

Contains information related to the health of a region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_summary** | [**RegionHealthModelAlertSummary**](RegionHealthModelAlertSummary.md) |  | [optional] 
**usage_metrics** | [**List[RegionHealthModelUsageMetricsInner]**](RegionHealthModelUsageMetricsInner.md) | List of usage metrics for the region. | [optional] 

## Example

```python
from openapi_client.models.region_health_model import RegionHealthModel

# TODO update the JSON string below
json = "{}"
# create an instance of RegionHealthModel from a JSON string
region_health_model_instance = RegionHealthModel.from_json(json)
# print the JSON string representation of the object
print(RegionHealthModel.to_json())

# convert the object into a dict
region_health_model_dict = region_health_model_instance.to_dict()
# create an instance of RegionHealthModel from a dict
region_health_model_from_dict = RegionHealthModel.from_dict(region_health_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


