# MediaTypeHolderWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[MediaTypeHolder]**](MediaTypeHolder.md) |  | [optional] 

## Example

```python
from openapi_client.models.media_type_holder_wrapped import MediaTypeHolderWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of MediaTypeHolderWrapped from a JSON string
media_type_holder_wrapped_instance = MediaTypeHolderWrapped.from_json(json)
# print the JSON string representation of the object
print(MediaTypeHolderWrapped.to_json())

# convert the object into a dict
media_type_holder_wrapped_dict = media_type_holder_wrapped_instance.to_dict()
# create an instance of MediaTypeHolderWrapped from a dict
media_type_holder_wrapped_from_dict = MediaTypeHolderWrapped.from_dict(media_type_holder_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


