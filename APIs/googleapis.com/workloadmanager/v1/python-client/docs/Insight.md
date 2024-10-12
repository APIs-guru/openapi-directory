# Insight

A presentation of host resource usage where the workload runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | Required. The instance id where the insight is generated from | [optional] 
**sap_discovery** | [**SapDiscovery**](SapDiscovery.md) |  | [optional] 
**sap_validation** | [**SapValidation**](SapValidation.md) |  | [optional] 
**sent_time** | **str** | Output only. [Output only] Create time stamp | [optional] [readonly] 
**sqlserver_validation** | [**SqlserverValidation**](SqlserverValidation.md) |  | [optional] 

## Example

```python
from openapi_client.models.insight import Insight

# TODO update the JSON string below
json = "{}"
# create an instance of Insight from a JSON string
insight_instance = Insight.from_json(json)
# print the JSON string representation of the object
print(Insight.to_json())

# convert the object into a dict
insight_dict = insight_instance.to_dict()
# create an instance of Insight from a dict
insight_from_dict = Insight.from_dict(insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


