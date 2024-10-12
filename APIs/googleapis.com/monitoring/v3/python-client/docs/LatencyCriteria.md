# LatencyCriteria

Parameters for a latency threshold SLI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threshold** | **str** | Good service is defined to be the count of requests made to this service that return in no more than threshold. | [optional] 

## Example

```python
from openapi_client.models.latency_criteria import LatencyCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of LatencyCriteria from a JSON string
latency_criteria_instance = LatencyCriteria.from_json(json)
# print the JSON string representation of the object
print(LatencyCriteria.to_json())

# convert the object into a dict
latency_criteria_dict = latency_criteria_instance.to_dict()
# create an instance of LatencyCriteria from a dict
latency_criteria_from_dict = LatencyCriteria.from_dict(latency_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


