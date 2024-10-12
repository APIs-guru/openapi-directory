# StorageDatabasecenterPartnerapiV1mainCompliance

Contains compliance information about a security standard indicating unmet recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**standard** | **str** | Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. | [optional] 
**version** | **str** | Version of the standard or benchmark, for example, 1.1 | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_compliance import StorageDatabasecenterPartnerapiV1mainCompliance

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainCompliance from a JSON string
storage_databasecenter_partnerapi_v1main_compliance_instance = StorageDatabasecenterPartnerapiV1mainCompliance.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainCompliance.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_compliance_dict = storage_databasecenter_partnerapi_v1main_compliance_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainCompliance from a dict
storage_databasecenter_partnerapi_v1main_compliance_from_dict = StorageDatabasecenterPartnerapiV1mainCompliance.from_dict(storage_databasecenter_partnerapi_v1main_compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


