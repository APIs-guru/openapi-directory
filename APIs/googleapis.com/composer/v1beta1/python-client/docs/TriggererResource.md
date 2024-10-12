# TriggererResource

Configuration for resources used by Airflow triggerers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Optional. The number of triggerers. | [optional] 
**cpu** | **float** | Optional. CPU request and limit for a single Airflow triggerer replica. | [optional] 
**memory_gb** | **float** | Optional. Memory (GB) request and limit for a single Airflow triggerer replica. | [optional] 

## Example

```python
from openapi_client.models.triggerer_resource import TriggererResource

# TODO update the JSON string below
json = "{}"
# create an instance of TriggererResource from a JSON string
triggerer_resource_instance = TriggererResource.from_json(json)
# print the JSON string representation of the object
print(TriggererResource.to_json())

# convert the object into a dict
triggerer_resource_dict = triggerer_resource_instance.to_dict()
# create an instance of TriggererResource from a dict
triggerer_resource_from_dict = TriggererResource.from_dict(triggerer_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


