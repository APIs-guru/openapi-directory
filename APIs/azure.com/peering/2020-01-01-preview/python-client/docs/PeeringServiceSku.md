# PeeringServiceSku

The SKU that defines the type of the peering service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the peering service SKU. | [optional] 

## Example

```python
from openapi_client.models.peering_service_sku import PeeringServiceSku

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceSku from a JSON string
peering_service_sku_instance = PeeringServiceSku.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceSku.to_json())

# convert the object into a dict
peering_service_sku_dict = peering_service_sku_instance.to_dict()
# create an instance of PeeringServiceSku from a dict
peering_service_sku_from_dict = PeeringServiceSku.from_dict(peering_service_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


