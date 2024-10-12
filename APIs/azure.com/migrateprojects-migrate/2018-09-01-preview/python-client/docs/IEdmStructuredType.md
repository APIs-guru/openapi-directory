# IEdmStructuredType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_type** | [**IEdmStructuredType**](IEdmStructuredType.md) |  | [optional] 
**declared_properties** | [**List[IEdmProperty]**](IEdmProperty.md) |  | [optional] [readonly] 
**is_abstract** | **bool** |  | [optional] [readonly] 
**is_open** | **bool** |  | [optional] [readonly] 
**type_kind** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.i_edm_structured_type import IEdmStructuredType

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmStructuredType from a JSON string
i_edm_structured_type_instance = IEdmStructuredType.from_json(json)
# print the JSON string representation of the object
print(IEdmStructuredType.to_json())

# convert the object into a dict
i_edm_structured_type_dict = i_edm_structured_type_instance.to_dict()
# create an instance of IEdmStructuredType from a dict
i_edm_structured_type_from_dict = IEdmStructuredType.from_dict(i_edm_structured_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


