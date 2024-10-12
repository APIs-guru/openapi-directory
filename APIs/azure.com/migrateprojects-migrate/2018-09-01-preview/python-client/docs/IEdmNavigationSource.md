# IEdmNavigationSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] [readonly] 
**navigation_property_bindings** | [**List[IEdmNavigationPropertyBinding]**](IEdmNavigationPropertyBinding.md) |  | [optional] [readonly] 
**path** | [**IEdmPathExpression**](IEdmPathExpression.md) |  | [optional] 
**type** | [**IEdmType**](IEdmType.md) |  | [optional] 

## Example

```python
from openapi_client.models.i_edm_navigation_source import IEdmNavigationSource

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmNavigationSource from a JSON string
i_edm_navigation_source_instance = IEdmNavigationSource.from_json(json)
# print the JSON string representation of the object
print(IEdmNavigationSource.to_json())

# convert the object into a dict
i_edm_navigation_source_dict = i_edm_navigation_source_instance.to_dict()
# create an instance of IEdmNavigationSource from a dict
i_edm_navigation_source_from_dict = IEdmNavigationSource.from_dict(i_edm_navigation_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


