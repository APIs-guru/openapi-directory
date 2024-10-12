# PeeringSku

The SKU that defines the tier and kind of the peering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | **str** | The family of the peering SKU. | [optional] 
**name** | **str** | The name of the peering SKU. | [optional] 
**size** | **str** | The size of the peering SKU. | [optional] 
**tier** | **str** | The tier of the peering SKU. | [optional] 

## Example

```python
from openapi_client.models.peering_sku import PeeringSku

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringSku from a JSON string
peering_sku_instance = PeeringSku.from_json(json)
# print the JSON string representation of the object
print(PeeringSku.to_json())

# convert the object into a dict
peering_sku_dict = peering_sku_instance.to_dict()
# create an instance of PeeringSku from a dict
peering_sku_from_dict = PeeringSku.from_dict(peering_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


