# PrismaConfig

Settings specific to the Mediaocean Prisma tool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prisma_cpe_code** | [**PrismaCpeCode**](PrismaCpeCode.md) |  | [optional] 
**prisma_type** | **str** | Required. The Prisma type. | [optional] 
**supplier** | **str** | Required. The entity allocated this budget (DSP, site, etc.). | [optional] 

## Example

```python
from openapi_client.models.prisma_config import PrismaConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrismaConfig from a JSON string
prisma_config_instance = PrismaConfig.from_json(json)
# print the JSON string representation of the object
print(PrismaConfig.to_json())

# convert the object into a dict
prisma_config_dict = prisma_config_instance.to_dict()
# create an instance of PrismaConfig from a dict
prisma_config_from_dict = PrismaConfig.from_dict(prisma_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


