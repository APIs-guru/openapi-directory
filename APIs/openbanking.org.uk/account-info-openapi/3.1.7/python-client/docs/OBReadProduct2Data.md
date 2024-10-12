# OBReadProduct2Data

Aligning with the read write specs structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**List[OBReadProduct2DataProductInner]**](OBReadProduct2DataProductInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data import OBReadProduct2Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2Data from a JSON string
ob_read_product2_data_instance = OBReadProduct2Data.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2Data.to_json())

# convert the object into a dict
ob_read_product2_data_dict = ob_read_product2_data_instance.to_dict()
# create an instance of OBReadProduct2Data from a dict
ob_read_product2_data_from_dict = OBReadProduct2Data.from_dict(ob_read_product2_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


