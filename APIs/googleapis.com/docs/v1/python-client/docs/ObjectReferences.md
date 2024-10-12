# ObjectReferences

A collection of object IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_ids** | **List[str]** | The object IDs. | [optional] 

## Example

```python
from openapi_client.models.object_references import ObjectReferences

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectReferences from a JSON string
object_references_instance = ObjectReferences.from_json(json)
# print the JSON string representation of the object
print(ObjectReferences.to_json())

# convert the object into a dict
object_references_dict = object_references_instance.to_dict()
# create an instance of ObjectReferences from a dict
object_references_from_dict = ObjectReferences.from_dict(object_references_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


