# ServiceAccessPolicyEntry

An access policy entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | An object ID that is allowed access to the FHIR service. | 

## Example

```python
from openapi_client.models.service_access_policy_entry import ServiceAccessPolicyEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAccessPolicyEntry from a JSON string
service_access_policy_entry_instance = ServiceAccessPolicyEntry.from_json(json)
# print the JSON string representation of the object
print(ServiceAccessPolicyEntry.to_json())

# convert the object into a dict
service_access_policy_entry_dict = service_access_policy_entry_instance.to_dict()
# create an instance of ServiceAccessPolicyEntry from a dict
service_access_policy_entry_from_dict = ServiceAccessPolicyEntry.from_dict(service_access_policy_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


