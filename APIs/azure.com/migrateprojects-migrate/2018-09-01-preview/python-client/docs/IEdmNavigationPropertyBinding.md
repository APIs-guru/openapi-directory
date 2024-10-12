# IEdmNavigationPropertyBinding


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**navigation_property** | [**IEdmNavigationProperty**](IEdmNavigationProperty.md) |  | [optional] 
**path** | [**IEdmPathExpression**](IEdmPathExpression.md) |  | [optional] 
**target** | [**IEdmNavigationSource**](IEdmNavigationSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.i_edm_navigation_property_binding import IEdmNavigationPropertyBinding

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmNavigationPropertyBinding from a JSON string
i_edm_navigation_property_binding_instance = IEdmNavigationPropertyBinding.from_json(json)
# print the JSON string representation of the object
print(IEdmNavigationPropertyBinding.to_json())

# convert the object into a dict
i_edm_navigation_property_binding_dict = i_edm_navigation_property_binding_instance.to_dict()
# create an instance of IEdmNavigationPropertyBinding from a dict
i_edm_navigation_property_binding_from_dict = IEdmNavigationPropertyBinding.from_dict(i_edm_navigation_property_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


