# TagsPatchResource

Wrapper resource for tags patch API request only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | The operation type for the patch API. | [optional] 
**properties** | [**Tags**](Tags.md) |  | [optional] 

## Example

```python
from openapi_client.models.tags_patch_resource import TagsPatchResource

# TODO update the JSON string below
json = "{}"
# create an instance of TagsPatchResource from a JSON string
tags_patch_resource_instance = TagsPatchResource.from_json(json)
# print the JSON string representation of the object
print(TagsPatchResource.to_json())

# convert the object into a dict
tags_patch_resource_dict = tags_patch_resource_instance.to_dict()
# create an instance of TagsPatchResource from a dict
tags_patch_resource_from_dict = TagsPatchResource.from_dict(tags_patch_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


