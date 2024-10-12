# IEdmTypeReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | [**IEdmType**](IEdmType.md) |  | [optional] 
**is_nullable** | **bool** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.i_edm_type_reference import IEdmTypeReference

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmTypeReference from a JSON string
i_edm_type_reference_instance = IEdmTypeReference.from_json(json)
# print the JSON string representation of the object
print(IEdmTypeReference.to_json())

# convert the object into a dict
i_edm_type_reference_dict = i_edm_type_reference_instance.to_dict()
# create an instance of IEdmTypeReference from a dict
i_edm_type_reference_from_dict = IEdmTypeReference.from_dict(i_edm_type_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


