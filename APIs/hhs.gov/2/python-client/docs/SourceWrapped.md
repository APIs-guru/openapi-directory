# SourceWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Source]**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_wrapped import SourceWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of SourceWrapped from a JSON string
source_wrapped_instance = SourceWrapped.from_json(json)
# print the JSON string representation of the object
print(SourceWrapped.to_json())

# convert the object into a dict
source_wrapped_dict = source_wrapped_instance.to_dict()
# create an instance of SourceWrapped from a dict
source_wrapped_from_dict = SourceWrapped.from_dict(source_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


