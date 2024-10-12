# AvailableSkuRequest

The filters for showing the available skus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements | 
**location** | **str** | Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version&#x3D;2018-01-01 | 
**sku_names** | **List[str]** | Sku Names to filter for available skus | [optional] 
**transfer_type** | **str** | Type of the transfer. | 

## Example

```python
from openapi_client.models.available_sku_request import AvailableSkuRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableSkuRequest from a JSON string
available_sku_request_instance = AvailableSkuRequest.from_json(json)
# print the JSON string representation of the object
print(AvailableSkuRequest.to_json())

# convert the object into a dict
available_sku_request_dict = available_sku_request_instance.to_dict()
# create an instance of AvailableSkuRequest from a dict
available_sku_request_from_dict = AvailableSkuRequest.from_dict(available_sku_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


