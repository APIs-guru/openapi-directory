# ResourceTags

The resource tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Gets or sets the tags, a dictionary of descriptors arm object | [optional] 

## Example

```python
from openapi_client.models.resource_tags import ResourceTags

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceTags from a JSON string
resource_tags_instance = ResourceTags.from_json(json)
# print the JSON string representation of the object
print(ResourceTags.to_json())

# convert the object into a dict
resource_tags_dict = resource_tags_instance.to_dict()
# create an instance of ResourceTags from a dict
resource_tags_from_dict = ResourceTags.from_dict(resource_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


