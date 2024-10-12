# BuildIcon


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BuildIconAttributes**](BuildIconAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.build_icon import BuildIcon

# TODO update the JSON string below
json = "{}"
# create an instance of BuildIcon from a JSON string
build_icon_instance = BuildIcon.from_json(json)
# print the JSON string representation of the object
print(BuildIcon.to_json())

# convert the object into a dict
build_icon_dict = build_icon_instance.to_dict()
# create an instance of BuildIcon from a dict
build_icon_from_dict = BuildIcon.from_dict(build_icon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


