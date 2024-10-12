# ImageAllowlist

Images that are exempted from normal checks based on name pattern only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_pattern** | **List[str]** | Required. A disjunction of image patterns to allow. If any of these patterns match, then the image is considered exempted by this allowlist. | [optional] 

## Example

```python
from openapi_client.models.image_allowlist import ImageAllowlist

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAllowlist from a JSON string
image_allowlist_instance = ImageAllowlist.from_json(json)
# print the JSON string representation of the object
print(ImageAllowlist.to_json())

# convert the object into a dict
image_allowlist_dict = image_allowlist_instance.to_dict()
# create an instance of ImageAllowlist from a dict
image_allowlist_from_dict = ImageAllowlist.from_dict(image_allowlist_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


