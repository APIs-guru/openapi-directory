# ExtraMaterial

Supplementary material to the feedback.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | [**TextLink**](TextLink.md) |  | [optional] 
**video** | [**VideoLink**](VideoLink.md) |  | [optional] 

## Example

```python
from openapi_client.models.extra_material import ExtraMaterial

# TODO update the JSON string below
json = "{}"
# create an instance of ExtraMaterial from a JSON string
extra_material_instance = ExtraMaterial.from_json(json)
# print the JSON string representation of the object
print(ExtraMaterial.to_json())

# convert the object into a dict
extra_material_dict = extra_material_instance.to_dict()
# create an instance of ExtraMaterial from a dict
extra_material_from_dict = ExtraMaterial.from_dict(extra_material_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


