# Ancestor

Identifying information for a single ancestor of a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.ancestor import Ancestor

# TODO update the JSON string below
json = "{}"
# create an instance of Ancestor from a JSON string
ancestor_instance = Ancestor.from_json(json)
# print the JSON string representation of the object
print(Ancestor.to_json())

# convert the object into a dict
ancestor_dict = ancestor_instance.to_dict()
# create an instance of Ancestor from a dict
ancestor_from_dict = Ancestor.from_dict(ancestor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


