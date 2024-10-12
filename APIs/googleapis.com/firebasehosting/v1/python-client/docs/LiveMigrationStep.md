# LiveMigrationStep

A set of updates including ACME challenges and DNS records that allow Hosting to create an SSL certificate and establish project ownership for your domain name before you direct traffic to Hosting servers. Use these updates to facilitate zero downtime migrations to Hosting from other services. After you've made the recommended updates, check your custom domain's `ownershipState` and `certState`. To avoid downtime, they should be `OWNERSHIP_ACTIVE` and `CERT_ACTIVE`, respectively, before you update your `A` and `AAAA` records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_verification** | [**CertVerification**](CertVerification.md) |  | [optional] 
**dns_updates** | [**DnsUpdates**](DnsUpdates.md) |  | [optional] 
**issues** | [**List[Status]**](Status.md) | Output only. Issues that prevent the current step from completing. | [optional] [readonly] 
**state** | **str** | Output only. The state of the live migration step, indicates whether you should work to complete the step now, in the future, or have already completed it. | [optional] [readonly] 

## Example

```python
from openapi_client.models.live_migration_step import LiveMigrationStep

# TODO update the JSON string below
json = "{}"
# create an instance of LiveMigrationStep from a JSON string
live_migration_step_instance = LiveMigrationStep.from_json(json)
# print the JSON string representation of the object
print(LiveMigrationStep.to_json())

# convert the object into a dict
live_migration_step_dict = live_migration_step_instance.to_dict()
# create an instance of LiveMigrationStep from a dict
live_migration_step_from_dict = LiveMigrationStep.from_dict(live_migration_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


