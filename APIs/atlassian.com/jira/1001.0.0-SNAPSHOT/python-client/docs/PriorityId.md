# PriorityId

The ID of an issue priority.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the issue priority. | [readonly] 

## Example

```python
from openapi_client.models.priority_id import PriorityId

# TODO update the JSON string below
json = "{}"
# create an instance of PriorityId from a JSON string
priority_id_instance = PriorityId.from_json(json)
# print the JSON string representation of the object
print(PriorityId.to_json())

# convert the object into a dict
priority_id_dict = priority_id_instance.to_dict()
# create an instance of PriorityId from a dict
priority_id_from_dict = PriorityId.from_dict(priority_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


