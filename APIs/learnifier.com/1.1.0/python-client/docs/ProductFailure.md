# ProductFailure


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The error message | [optional] 
**product_id** | **str** | A product id | [optional] 
**type** | **str** | The technical error type | [optional] 

## Example

```python
from openapi_client.models.product_failure import ProductFailure

# TODO update the JSON string below
json = "{}"
# create an instance of ProductFailure from a JSON string
product_failure_instance = ProductFailure.from_json(json)
# print the JSON string representation of the object
print(ProductFailure.to_json())

# convert the object into a dict
product_failure_dict = product_failure_instance.to_dict()
# create an instance of ProductFailure from a dict
product_failure_from_dict = ProductFailure.from_dict(product_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


