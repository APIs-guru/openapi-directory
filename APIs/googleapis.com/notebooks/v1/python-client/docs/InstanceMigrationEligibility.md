# InstanceMigrationEligibility

InstanceMigrationEligibility represents the feasibility information of a migration from UmN to WbI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** | Output only. Certain configurations make the UmN ineligible for an automatic migration. A manual migration is required. | [optional] [readonly] 
**warnings** | **List[str]** | Output only. Certain configurations will be defaulted during the migration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_migration_eligibility import InstanceMigrationEligibility

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceMigrationEligibility from a JSON string
instance_migration_eligibility_instance = InstanceMigrationEligibility.from_json(json)
# print the JSON string representation of the object
print(InstanceMigrationEligibility.to_json())

# convert the object into a dict
instance_migration_eligibility_dict = instance_migration_eligibility_instance.to_dict()
# create an instance of InstanceMigrationEligibility from a dict
instance_migration_eligibility_from_dict = InstanceMigrationEligibility.from_dict(instance_migration_eligibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


