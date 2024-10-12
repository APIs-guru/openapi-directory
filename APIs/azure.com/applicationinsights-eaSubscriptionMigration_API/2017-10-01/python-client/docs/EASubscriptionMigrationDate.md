# EASubscriptionMigrationDate

Subscription migrate date information properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_grand_fatherable_subscription** | **bool** | Is subscription in the grand fatherable subscription list. | [optional] 
**opted_in_date** | **datetime** | Time to start using new pricing model. | [optional] 

## Example

```python
from openapi_client.models.ea_subscription_migration_date import EASubscriptionMigrationDate

# TODO update the JSON string below
json = "{}"
# create an instance of EASubscriptionMigrationDate from a JSON string
ea_subscription_migration_date_instance = EASubscriptionMigrationDate.from_json(json)
# print the JSON string representation of the object
print(EASubscriptionMigrationDate.to_json())

# convert the object into a dict
ea_subscription_migration_date_dict = ea_subscription_migration_date_instance.to_dict()
# create an instance of EASubscriptionMigrationDate from a dict
ea_subscription_migration_date_from_dict = EASubscriptionMigrationDate.from_dict(ea_subscription_migration_date_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


