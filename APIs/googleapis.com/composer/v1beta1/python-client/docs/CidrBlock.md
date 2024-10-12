# CidrBlock

CIDR block with an optional name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr_block** | **str** | CIDR block that must be specified in CIDR notation. | [optional] 
**display_name** | **str** | User-defined name that identifies the CIDR block. | [optional] 

## Example

```python
from openapi_client.models.cidr_block import CidrBlock

# TODO update the JSON string below
json = "{}"
# create an instance of CidrBlock from a JSON string
cidr_block_instance = CidrBlock.from_json(json)
# print the JSON string representation of the object
print(CidrBlock.to_json())

# convert the object into a dict
cidr_block_dict = cidr_block_instance.to_dict()
# create an instance of CidrBlock from a dict
cidr_block_from_dict = CidrBlock.from_dict(cidr_block_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


