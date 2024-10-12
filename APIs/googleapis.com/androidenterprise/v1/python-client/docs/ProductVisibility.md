# ProductVisibility

A product to be made visible to a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | The product ID to make visible to the user. Required for each item in the productVisibility list. | [optional] 
**track_ids** | **List[str]** | Grants the user visibility to the specified product track(s), identified by trackIds. | [optional] 
**tracks** | **List[str]** | Deprecated. Use trackIds instead. | [optional] 

## Example

```python
from openapi_client.models.product_visibility import ProductVisibility

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVisibility from a JSON string
product_visibility_instance = ProductVisibility.from_json(json)
# print the JSON string representation of the object
print(ProductVisibility.to_json())

# convert the object into a dict
product_visibility_dict = product_visibility_instance.to_dict()
# create an instance of ProductVisibility from a dict
product_visibility_from_dict = ProductVisibility.from_dict(product_visibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


