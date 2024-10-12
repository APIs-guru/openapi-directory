# Service


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | A boolean exposing the active status of the shipping service. Required. | [optional] 
**currency** | **str** | The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups. | [optional] 
**delivery_country** | **str** | The CLDR territory code of the country to which the service applies. Required. | [optional] 
**delivery_time** | [**DeliveryTime**](DeliveryTime.md) |  | [optional] 
**eligibility** | **str** | Eligibility for this service. Acceptable values are: - \&quot;&#x60;All scenarios&#x60;\&quot; - \&quot;&#x60;All scenarios except Shopping Actions&#x60;\&quot; - \&quot;&#x60;Shopping Actions&#x60;\&quot;  | [optional] 
**minimum_order_value** | [**Price**](Price.md) |  | [optional] 
**minimum_order_value_table** | [**MinimumOrderValueTable**](MinimumOrderValueTable.md) |  | [optional] 
**name** | **str** | Free-form name of the service. Must be unique within target account. Required. | [optional] 
**pickup_service** | [**PickupCarrierService**](PickupCarrierService.md) |  | [optional] 
**rate_groups** | [**List[RateGroup]**](RateGroup.md) | Shipping rate group definitions. Only the last one is allowed to have an empty &#x60;applicableShippingLabels&#x60;, which means \&quot;everything else\&quot;. The other &#x60;applicableShippingLabels&#x60; must not overlap. | [optional] 
**shipment_type** | **str** | Type of locations this service ships orders to. Acceptable values are: - \&quot;&#x60;delivery&#x60;\&quot; - \&quot;&#x60;pickup&#x60; (deprecated)\&quot; - \&quot;&#x60;local_delivery&#x60;\&quot; - \&quot;&#x60;collection_point&#x60;\&quot;  | [optional] 
**store_config** | [**ServiceStoreConfig**](ServiceStoreConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


