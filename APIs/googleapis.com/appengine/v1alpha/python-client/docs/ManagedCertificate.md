# ManagedCertificate

A certificate managed by App Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_renewal_time** | **str** | Time at which the certificate was last renewed. The renewal process is fully managed. Certificate renewal will automatically occur before the certificate expires. Renewal errors can be tracked via ManagementStatus.@OutputOnly | [optional] 
**status** | **str** | Status of certificate management. Refers to the most recent certificate acquisition or renewal attempt.@OutputOnly | [optional] 

## Example

```python
from openapi_client.models.managed_certificate import ManagedCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedCertificate from a JSON string
managed_certificate_instance = ManagedCertificate.from_json(json)
# print the JSON string representation of the object
print(ManagedCertificate.to_json())

# convert the object into a dict
managed_certificate_dict = managed_certificate_instance.to_dict()
# create an instance of ManagedCertificate from a dict
managed_certificate_from_dict = ManagedCertificate.from_dict(managed_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


