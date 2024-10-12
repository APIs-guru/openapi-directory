# Material


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | Name for the color of this material. This field is for display only and is not required for creating an order (use the material&#39;s id). | [optional] 
**color_sample** | **str** | A hex value providing an approximate visual sample of this color. | [optional] 
**id** | **int** | The unique identifier for this material. Use this value when submitting order items to specify that an ordered model should be printed with a specific material. | [optional] 
**type** | **str** | Type of material, excluding color. Will be one of \&quot;PLA\&quot;, \&quot;Semi-flex TPU\&quot;, or \&quot;Full-flex TPU\&quot;. This field is for display only and is not required for creating an order (use the material&#39;s id). | [optional] 

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


