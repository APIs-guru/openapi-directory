# RegionalPriceMigrationConfig

Configuration for a price migration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oldest_allowed_price_version_time** | **str** | Required. The cutoff time for historical prices that subscribers can remain paying. Subscribers on prices which were available at this cutoff time or later will stay on their existing price. Subscribers on older prices will be migrated to the currently-offered price. The migrated subscribers will receive a notification that they will be paying a different price. Subscribers who do not agree to the new price will have their subscription ended at the next renewal. | [optional] 
**price_increase_type** | **str** | Optional. The behavior the caller wants users to see when there is a price increase during migration. If left unset, the behavior defaults to PRICE_INCREASE_TYPE_OPT_IN. Note that the first opt-out price increase migration for each app must be initiated in Play Console. | [optional] 
**region_code** | **str** | Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. \&quot;US\&quot;. | [optional] 

## Example

```python
from openapi_client.models.regional_price_migration_config import RegionalPriceMigrationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalPriceMigrationConfig from a JSON string
regional_price_migration_config_instance = RegionalPriceMigrationConfig.from_json(json)
# print the JSON string representation of the object
print(RegionalPriceMigrationConfig.to_json())

# convert the object into a dict
regional_price_migration_config_dict = regional_price_migration_config_instance.to_dict()
# create an instance of RegionalPriceMigrationConfig from a dict
regional_price_migration_config_from_dict = RegionalPriceMigrationConfig.from_dict(regional_price_migration_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


