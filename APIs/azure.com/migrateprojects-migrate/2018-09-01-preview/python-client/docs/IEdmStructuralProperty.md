# IEdmStructuralProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**declaring_type** | [**IEdmStructuredType**](IEdmStructuredType.md) |  | [optional] 
**default_value_string** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**property_kind** | **str** |  | [optional] [readonly] 
**type** | [**IEdmTypeReference**](IEdmTypeReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.i_edm_structural_property import IEdmStructuralProperty

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmStructuralProperty from a JSON string
i_edm_structural_property_instance = IEdmStructuralProperty.from_json(json)
# print the JSON string representation of the object
print(IEdmStructuralProperty.to_json())

# convert the object into a dict
i_edm_structural_property_dict = i_edm_structural_property_instance.to_dict()
# create an instance of IEdmStructuralProperty from a dict
i_edm_structural_property_from_dict = IEdmStructuralProperty.from_dict(i_edm_structural_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


