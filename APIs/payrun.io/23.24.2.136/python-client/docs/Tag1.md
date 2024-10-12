# Tag1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The tags&#39; created | [optional] 
**tagged_item** | [**TaggedItem**](TaggedItem.md) |  | [optional] 
**text** | **str** | The tags&#39; text | [optional] 

## Example

```python
from openapi_client.models.tag1 import Tag1

# TODO update the JSON string below
json = "{}"
# create an instance of Tag1 from a JSON string
tag1_instance = Tag1.from_json(json)
# print the JSON string representation of the object
print(Tag1.to_json())

# convert the object into a dict
tag1_dict = tag1_instance.to_dict()
# create an instance of Tag1 from a dict
tag1_from_dict = Tag1.from_dict(tag1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


