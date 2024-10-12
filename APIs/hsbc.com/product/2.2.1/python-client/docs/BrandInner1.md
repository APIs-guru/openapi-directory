# BrandInner1

Brand registered by the banking group at https://register.fca.org.uk/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** | Brand Name that an organisation uses to market its products or services to a consumer as registered at https://register.fca.org.uk/ | 
**ccc** | [**List[CCCInner]**](CCCInner.md) | CCC means a Commercial Credit Card. | 

## Example

```python
from openapi_client.models.brand_inner1 import BrandInner1

# TODO update the JSON string below
json = "{}"
# create an instance of BrandInner1 from a JSON string
brand_inner1_instance = BrandInner1.from_json(json)
# print the JSON string representation of the object
print(BrandInner1.to_json())

# convert the object into a dict
brand_inner1_dict = brand_inner1_instance.to_dict()
# create an instance of BrandInner1 from a dict
brand_inner1_from_dict = BrandInner1.from_dict(brand_inner1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


