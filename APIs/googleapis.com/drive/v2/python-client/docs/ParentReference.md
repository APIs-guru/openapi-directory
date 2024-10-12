# ParentReference

A reference to a file's parent. Some resource methods (such as `parents.get`) require a `parentId`. Use the `parents.list` method to retrieve the ID for a parent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the parent. | [optional] 
**is_root** | **bool** | Output only. Whether or not the parent is the root folder. | [optional] 
**kind** | **str** | Output only. This is always &#x60;drive#parentReference&#x60;. | [optional] [default to 'drive#parentReference']
**parent_link** | **str** | Output only. A link to the parent. | [optional] 
**self_link** | **str** | Output only. A link back to this reference. | [optional] 

## Example

```python
from openapi_client.models.parent_reference import ParentReference

# TODO update the JSON string below
json = "{}"
# create an instance of ParentReference from a JSON string
parent_reference_instance = ParentReference.from_json(json)
# print the JSON string representation of the object
print(ParentReference.to_json())

# convert the object into a dict
parent_reference_dict = parent_reference_instance.to_dict()
# create an instance of ParentReference from a dict
parent_reference_from_dict = ParentReference.from_dict(parent_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


