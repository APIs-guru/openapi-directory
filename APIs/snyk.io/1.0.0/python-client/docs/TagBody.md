# TagBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Valid tag key. | [optional] 
**value** | **str** | Valid tag value. | [optional] 

## Example

```python
from openapi_client.models.tag_body import TagBody

# TODO update the JSON string below
json = "{}"
# create an instance of TagBody from a JSON string
tag_body_instance = TagBody.from_json(json)
# print the JSON string representation of the object
print(TagBody.to_json())

# convert the object into a dict
tag_body_dict = tag_body_instance.to_dict()
# create an instance of TagBody from a dict
tag_body_from_dict = TagBody.from_dict(tag_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


