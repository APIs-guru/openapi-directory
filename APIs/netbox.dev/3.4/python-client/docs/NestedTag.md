# NestedTag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_tag import NestedTag

# TODO update the JSON string below
json = "{}"
# create an instance of NestedTag from a JSON string
nested_tag_instance = NestedTag.from_json(json)
# print the JSON string representation of the object
print(NestedTag.to_json())

# convert the object into a dict
nested_tag_dict = nested_tag_instance.to_dict()
# create an instance of NestedTag from a dict
nested_tag_from_dict = NestedTag.from_dict(nested_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


