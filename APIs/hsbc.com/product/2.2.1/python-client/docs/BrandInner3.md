# BrandInner3

Brand registered by the banking group at https://register.fca.org.uk/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** | Brand Name that an organisation uses to market its products or services to a consumer as registered at https://register.fca.org.uk/ | 
**sme_loan** | [**List[SMELoanInner]**](SMELoanInner.md) | SMELoan means SME unsecured loan. | 

## Example

```python
from openapi_client.models.brand_inner3 import BrandInner3

# TODO update the JSON string below
json = "{}"
# create an instance of BrandInner3 from a JSON string
brand_inner3_instance = BrandInner3.from_json(json)
# print the JSON string representation of the object
print(BrandInner3.to_json())

# convert the object into a dict
brand_inner3_dict = brand_inner3_instance.to_dict()
# create an instance of BrandInner3 from a dict
brand_inner3_from_dict = BrandInner3.from_dict(brand_inner3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


