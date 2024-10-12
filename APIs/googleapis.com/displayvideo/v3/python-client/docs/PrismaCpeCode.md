# PrismaCpeCode

Google Payments Center supports searching and filtering on the component fields of this code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prisma_client_code** | **str** | The Prisma client code. | [optional] 
**prisma_estimate_code** | **str** | The Prisma estimate code. | [optional] 
**prisma_product_code** | **str** | The Prisma product code. | [optional] 

## Example

```python
from openapi_client.models.prisma_cpe_code import PrismaCpeCode

# TODO update the JSON string below
json = "{}"
# create an instance of PrismaCpeCode from a JSON string
prisma_cpe_code_instance = PrismaCpeCode.from_json(json)
# print the JSON string representation of the object
print(PrismaCpeCode.to_json())

# convert the object into a dict
prisma_cpe_code_dict = prisma_cpe_code_instance.to_dict()
# create an instance of PrismaCpeCode from a dict
prisma_cpe_code_from_dict = PrismaCpeCode.from_dict(prisma_cpe_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


