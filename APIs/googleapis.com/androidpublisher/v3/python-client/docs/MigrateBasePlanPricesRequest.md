# MigrateBasePlanPricesRequest

Request message for MigrateBasePlanPrices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_plan_id** | **str** | Required. The unique base plan ID of the base plan to update prices on. | [optional] 
**latency_tolerance** | **str** | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. | [optional] 
**package_name** | **str** | Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource. | [optional] 
**product_id** | **str** | Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource. | [optional] 
**regional_price_migrations** | [**List[RegionalPriceMigrationConfig]**](RegionalPriceMigrationConfig.md) | Required. The regional prices to update. | [optional] 
**regions_version** | [**RegionsVersion**](RegionsVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.migrate_base_plan_prices_request import MigrateBasePlanPricesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateBasePlanPricesRequest from a JSON string
migrate_base_plan_prices_request_instance = MigrateBasePlanPricesRequest.from_json(json)
# print the JSON string representation of the object
print(MigrateBasePlanPricesRequest.to_json())

# convert the object into a dict
migrate_base_plan_prices_request_dict = migrate_base_plan_prices_request_instance.to_dict()
# create an instance of MigrateBasePlanPricesRequest from a dict
migrate_base_plan_prices_request_from_dict = MigrateBasePlanPricesRequest.from_dict(migrate_base_plan_prices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


