# SLAMiss


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dag_id** | **str** | The DAG ID. | [optional] 
**description** | **str** |  | [optional] 
**email_sent** | **bool** |  | [optional] 
**execution_date** | **str** |  | [optional] 
**notification_sent** | **bool** |  | [optional] 
**task_id** | **str** | The task ID. | [optional] [readonly] 
**timestamp** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sla_miss import SLAMiss

# TODO update the JSON string below
json = "{}"
# create an instance of SLAMiss from a JSON string
sla_miss_instance = SLAMiss.from_json(json)
# print the JSON string representation of the object
print(SLAMiss.to_json())

# convert the object into a dict
sla_miss_dict = sla_miss_instance.to_dict()
# create an instance of SLAMiss from a dict
sla_miss_from_dict = SLAMiss.from_dict(sla_miss_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


