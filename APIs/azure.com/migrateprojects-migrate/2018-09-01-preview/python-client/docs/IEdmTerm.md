# IEdmTerm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applies_to** | **str** |  | [optional] [readonly] 
**default_value** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**namespace** | **str** |  | [optional] [readonly] 
**schema_element_kind** | **str** |  | [optional] [readonly] 
**type** | [**IEdmTypeReference**](IEdmTypeReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.i_edm_term import IEdmTerm

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmTerm from a JSON string
i_edm_term_instance = IEdmTerm.from_json(json)
# print the JSON string representation of the object
print(IEdmTerm.to_json())

# convert the object into a dict
i_edm_term_dict = i_edm_term_instance.to_dict()
# create an instance of IEdmTerm from a dict
i_edm_term_from_dict = IEdmTerm.from_dict(i_edm_term_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


