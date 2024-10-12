# ChildReference

A reference to a folder's child. Some resource methods (such as `children.get`) require a `childId`. Use the `children.list` method to retrieve the ID of the child.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_link** | **str** | Output only. A link to the child. | [optional] 
**id** | **str** | The ID of the child. | [optional] 
**kind** | **str** | Output only. This is always &#x60;drive#childReference&#x60;. | [optional] [default to 'drive#childReference']
**self_link** | **str** | Output only. A link back to this reference. | [optional] 

## Example

```python
from openapi_client.models.child_reference import ChildReference

# TODO update the JSON string below
json = "{}"
# create an instance of ChildReference from a JSON string
child_reference_instance = ChildReference.from_json(json)
# print the JSON string representation of the object
print(ChildReference.to_json())

# convert the object into a dict
child_reference_dict = child_reference_instance.to_dict()
# create an instance of ChildReference from a dict
child_reference_from_dict = ChildReference.from_dict(child_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


