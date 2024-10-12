# UpdateAssignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **str** | The policy slug | 
**username** | **str** | The username being assinged | [optional] 

## Example

```python
from openapi_client.models.update_assignment import UpdateAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAssignment from a JSON string
update_assignment_instance = UpdateAssignment.from_json(json)
# print the JSON string representation of the object
print(UpdateAssignment.to_json())

# convert the object into a dict
update_assignment_dict = update_assignment_instance.to_dict()
# create an instance of UpdateAssignment from a dict
update_assignment_from_dict = UpdateAssignment.from_dict(update_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


