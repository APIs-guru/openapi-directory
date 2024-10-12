# Assignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_url** | **str** |  | [optional] 
**assigned** | **bool** |  | [optional] 
**policy** | **str** |  | [optional] 
**team** | **str** |  | [optional] 
**user** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.assignment import Assignment

# TODO update the JSON string below
json = "{}"
# create an instance of Assignment from a JSON string
assignment_instance = Assignment.from_json(json)
# print the JSON string representation of the object
print(Assignment.to_json())

# convert the object into a dict
assignment_dict = assignment_instance.to_dict()
# create an instance of Assignment from a dict
assignment_from_dict = Assignment.from_dict(assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


