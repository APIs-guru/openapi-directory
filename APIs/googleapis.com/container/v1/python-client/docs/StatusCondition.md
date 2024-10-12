# StatusCondition

StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_code** | **str** | Canonical code of the condition. | [optional] 
**code** | **str** | Machine-friendly representation of the condition Deprecated. Use canonical_code instead. | [optional] 
**message** | **str** | Human-friendly representation of the condition | [optional] 

## Example

```python
from openapi_client.models.status_condition import StatusCondition

# TODO update the JSON string below
json = "{}"
# create an instance of StatusCondition from a JSON string
status_condition_instance = StatusCondition.from_json(json)
# print the JSON string representation of the object
print(StatusCondition.to_json())

# convert the object into a dict
status_condition_dict = status_condition_instance.to_dict()
# create an instance of StatusCondition from a dict
status_condition_from_dict = StatusCondition.from_dict(status_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


