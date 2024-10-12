# ProductAllOfCompatibility

Product compatibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Full error message if any compatibility issues are found | [optional] 
**is_compatible** | **bool** | Tells if product is compatible with current device | [optional] 
**issues** | **List[str]** | List of all issues found | [optional] 
**message** | **str** | Short error message if any compatibility issues are found | [optional] 

## Example

```python
from openapi_client.models.product_all_of_compatibility import ProductAllOfCompatibility

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAllOfCompatibility from a JSON string
product_all_of_compatibility_instance = ProductAllOfCompatibility.from_json(json)
# print the JSON string representation of the object
print(ProductAllOfCompatibility.to_json())

# convert the object into a dict
product_all_of_compatibility_dict = product_all_of_compatibility_instance.to_dict()
# create an instance of ProductAllOfCompatibility from a dict
product_all_of_compatibility_from_dict = ProductAllOfCompatibility.from_dict(product_all_of_compatibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


