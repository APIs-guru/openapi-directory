# TagInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**ShowFollowEmbedded**](ShowFollowEmbedded.md) |  | [optional] 
**show_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.tag_instance import TagInstance

# TODO update the JSON string below
json = "{}"
# create an instance of TagInstance from a JSON string
tag_instance_instance = TagInstance.from_json(json)
# print the JSON string representation of the object
print(TagInstance.to_json())

# convert the object into a dict
tag_instance_dict = tag_instance_instance.to_dict()
# create an instance of TagInstance from a dict
tag_instance_from_dict = TagInstance.from_dict(tag_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


