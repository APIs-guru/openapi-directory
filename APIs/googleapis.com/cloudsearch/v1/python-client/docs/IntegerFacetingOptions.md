# IntegerFacetingOptions

Used to specify integer faceting options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integer_buckets** | **List[str]** | Buckets for given integer values should be in strictly ascending order. For example, if values supplied are (1,5,10,100), the following facet buckets will be formed {&lt;1, [1,5), [5-10), [10-100), &gt;&#x3D;100}. | [optional] 

## Example

```python
from openapi_client.models.integer_faceting_options import IntegerFacetingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of IntegerFacetingOptions from a JSON string
integer_faceting_options_instance = IntegerFacetingOptions.from_json(json)
# print the JSON string representation of the object
print(IntegerFacetingOptions.to_json())

# convert the object into a dict
integer_faceting_options_dict = integer_faceting_options_instance.to_dict()
# create an instance of IntegerFacetingOptions from a dict
integer_faceting_options_from_dict = IntegerFacetingOptions.from_dict(integer_faceting_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


