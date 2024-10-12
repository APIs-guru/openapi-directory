# NestedASN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asn** | **int** | 32-bit autonomous system number | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_asn import NestedASN

# TODO update the JSON string below
json = "{}"
# create an instance of NestedASN from a JSON string
nested_asn_instance = NestedASN.from_json(json)
# print the JSON string representation of the object
print(NestedASN.to_json())

# convert the object into a dict
nested_asn_dict = nested_asn_instance.to_dict()
# create an instance of NestedASN from a dict
nested_asn_from_dict = NestedASN.from_dict(nested_asn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


