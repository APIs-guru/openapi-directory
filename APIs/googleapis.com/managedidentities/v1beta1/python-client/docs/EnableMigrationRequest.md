# EnableMigrationRequest

EnableMigrationRequest is the request message for EnableMigration method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_duration** | **str** | Optional. Period after which the migration would be auto disabled. If unspecified, a default timeout of 48h is used. | [optional] 
**migrating_domains** | [**List[OnPremDomainDetails]**](OnPremDomainDetails.md) | Required. List of the on-prem domains to be migrated. | [optional] 

## Example

```python
from openapi_client.models.enable_migration_request import EnableMigrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnableMigrationRequest from a JSON string
enable_migration_request_instance = EnableMigrationRequest.from_json(json)
# print the JSON string representation of the object
print(EnableMigrationRequest.to_json())

# convert the object into a dict
enable_migration_request_dict = enable_migration_request_instance.to_dict()
# create an instance of EnableMigrationRequest from a dict
enable_migration_request_from_dict = EnableMigrationRequest.from_dict(enable_migration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


