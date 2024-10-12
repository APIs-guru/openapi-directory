# BrandInner

Brand owned by an organisation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | [**List[BranchInner]**](BranchInner.md) | Information that locates and identifies a specific branch of a financial institution. | 
**brand_name** | **str** | Brand Name that an organisation uses to market its products or services to a consumer | 

## Example

```python
from openapi_client.models.brand_inner import BrandInner

# TODO update the JSON string below
json = "{}"
# create an instance of BrandInner from a JSON string
brand_inner_instance = BrandInner.from_json(json)
# print the JSON string representation of the object
print(BrandInner.to_json())

# convert the object into a dict
brand_inner_dict = brand_inner_instance.to_dict()
# create an instance of BrandInner from a dict
brand_inner_from_dict = BrandInner.from_dict(brand_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


