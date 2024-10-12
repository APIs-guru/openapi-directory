# RuntimeMigrationEligibility

RuntimeMigrationEligibility represents the feasibility information of a migration from GmN to WbI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** | Output only. Certain configurations make the GmN ineligible for an automatic migration. A manual migration is required. | [optional] [readonly] 
**warnings** | **List[str]** | Output only. Certain configurations will be defaulted during the migration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.runtime_migration_eligibility import RuntimeMigrationEligibility

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeMigrationEligibility from a JSON string
runtime_migration_eligibility_instance = RuntimeMigrationEligibility.from_json(json)
# print the JSON string representation of the object
print(RuntimeMigrationEligibility.to_json())

# convert the object into a dict
runtime_migration_eligibility_dict = runtime_migration_eligibility_instance.to_dict()
# create an instance of RuntimeMigrationEligibility from a dict
runtime_migration_eligibility_from_dict = RuntimeMigrationEligibility.from_dict(runtime_migration_eligibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


