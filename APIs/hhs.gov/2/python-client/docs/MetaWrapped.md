# MetaWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Meta]**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.meta_wrapped import MetaWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of MetaWrapped from a JSON string
meta_wrapped_instance = MetaWrapped.from_json(json)
# print the JSON string representation of the object
print(MetaWrapped.to_json())

# convert the object into a dict
meta_wrapped_dict = meta_wrapped_instance.to_dict()
# create an instance of MetaWrapped from a dict
meta_wrapped_from_dict = MetaWrapped.from_dict(meta_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


