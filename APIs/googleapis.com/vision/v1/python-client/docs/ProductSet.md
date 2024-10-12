# ProductSet

A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The user-provided name for this ProductSet. Must not be empty. Must be at most 4096 characters long. | [optional] 
**index_error** | [**Status**](Status.md) |  | [optional] 
**index_time** | **str** | Output only. The time at which this ProductSet was last indexed. Query results will reflect all updates before this time. If this ProductSet has never been indexed, this timestamp is the default value \&quot;1970-01-01T00:00:00Z\&quot;. This field is ignored when creating a ProductSet. | [optional] [readonly] 
**name** | **str** | The resource name of the ProductSet. Format is: &#x60;projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID&#x60;. This field is ignored when creating a ProductSet. | [optional] 

## Example

```python
from openapi_client.models.product_set import ProductSet

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSet from a JSON string
product_set_instance = ProductSet.from_json(json)
# print the JSON string representation of the object
print(ProductSet.to_json())

# convert the object into a dict
product_set_dict = product_set_instance.to_dict()
# create an instance of ProductSet from a dict
product_set_from_dict = ProductSet.from_dict(product_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


