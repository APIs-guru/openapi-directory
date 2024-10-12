# ResourceHealthSummary

Base class to define the health summary of the resources contained under an Arm resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[HealthErrorSummary]**](HealthErrorSummary.md) | The list of summary of health errors across the resources under the container. | [optional] 
**resource_count** | **int** | The count of total resources under the container. | [optional] 

## Example

```python
from openapi_client.models.resource_health_summary import ResourceHealthSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceHealthSummary from a JSON string
resource_health_summary_instance = ResourceHealthSummary.from_json(json)
# print the JSON string representation of the object
print(ResourceHealthSummary.to_json())

# convert the object into a dict
resource_health_summary_dict = resource_health_summary_instance.to_dict()
# create an instance of ResourceHealthSummary from a dict
resource_health_summary_from_dict = ResourceHealthSummary.from_dict(resource_health_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


