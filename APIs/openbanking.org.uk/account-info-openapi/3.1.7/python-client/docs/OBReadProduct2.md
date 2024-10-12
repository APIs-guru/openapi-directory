# OBReadProduct2

Product details of Other Product which is not avaiable in the standard list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBReadProduct2Data**](OBReadProduct2Data.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2 import OBReadProduct2

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2 from a JSON string
ob_read_product2_instance = OBReadProduct2.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2.to_json())

# convert the object into a dict
ob_read_product2_dict = ob_read_product2_instance.to_dict()
# create an instance of OBReadProduct2 from a dict
ob_read_product2_from_dict = OBReadProduct2.from_dict(ob_read_product2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


