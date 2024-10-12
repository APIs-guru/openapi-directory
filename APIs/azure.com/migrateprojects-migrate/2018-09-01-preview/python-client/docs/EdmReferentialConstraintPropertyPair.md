# EdmReferentialConstraintPropertyPair


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependent_property** | [**IEdmStructuralProperty**](IEdmStructuralProperty.md) |  | [optional] 
**principal_property** | [**IEdmStructuralProperty**](IEdmStructuralProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.edm_referential_constraint_property_pair import EdmReferentialConstraintPropertyPair

# TODO update the JSON string below
json = "{}"
# create an instance of EdmReferentialConstraintPropertyPair from a JSON string
edm_referential_constraint_property_pair_instance = EdmReferentialConstraintPropertyPair.from_json(json)
# print the JSON string representation of the object
print(EdmReferentialConstraintPropertyPair.to_json())

# convert the object into a dict
edm_referential_constraint_property_pair_dict = edm_referential_constraint_property_pair_instance.to_dict()
# create an instance of EdmReferentialConstraintPropertyPair from a dict
edm_referential_constraint_property_pair_from_dict = EdmReferentialConstraintPropertyPair.from_dict(edm_referential_constraint_property_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


