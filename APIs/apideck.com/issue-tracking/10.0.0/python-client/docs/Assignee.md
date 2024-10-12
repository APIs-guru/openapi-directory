# Assignee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | 
**username** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.assignee import Assignee

# TODO update the JSON string below
json = "{}"
# create an instance of Assignee from a JSON string
assignee_instance = Assignee.from_json(json)
# print the JSON string representation of the object
print(Assignee.to_json())

# convert the object into a dict
assignee_dict = assignee_instance.to_dict()
# create an instance of Assignee from a dict
assignee_from_dict = Assignee.from_dict(assignee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


