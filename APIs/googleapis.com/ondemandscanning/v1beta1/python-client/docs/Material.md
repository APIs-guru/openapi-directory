# Material


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **Dict[str, str]** |  | [optional] 
**uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.material import Material

# TODO update the JSON string below
json = "{}"
# create an instance of Material from a JSON string
material_instance = Material.from_json(json)
# print the JSON string representation of the object
print(Material.to_json())

# convert the object into a dict
material_dict = material_instance.to_dict()
# create an instance of Material from a dict
material_from_dict = Material.from_dict(material_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


