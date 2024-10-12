# Registration

The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/) (Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations)). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_settings** | [**ContactSettings**](ContactSettings.md) |  | [optional] 
**create_time** | **str** | Output only. The creation timestamp of the &#x60;Registration&#x60; resource. | [optional] [readonly] 
**dns_settings** | [**DnsSettings**](DnsSettings.md) |  | [optional] 
**domain_name** | **str** | Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format. | [optional] 
**expire_time** | **str** | Output only. The expiration timestamp of the &#x60;Registration&#x60;. | [optional] [readonly] 
**issues** | **List[str]** | Output only. The set of issues with the &#x60;Registration&#x60; that require attention. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Set of labels associated with the &#x60;Registration&#x60;. | [optional] 
**management_settings** | [**ManagementSettings**](ManagementSettings.md) |  | [optional] 
**name** | **str** | Output only. Name of the &#x60;Registration&#x60; resource, in the format &#x60;projects/*/locations/*/registrations/&#x60;. | [optional] [readonly] 
**pending_contact_settings** | [**ContactSettings**](ContactSettings.md) |  | [optional] 
**register_failure_reason** | **str** | Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state. | [optional] [readonly] 
**state** | **str** | Output only. The state of the &#x60;Registration&#x60; | [optional] [readonly] 
**supported_privacy** | **List[str]** | Output only. Set of options for the &#x60;contact_settings.privacy&#x60; field that this &#x60;Registration&#x60; supports. | [optional] [readonly] 
**transfer_failure_reason** | **str** | Output only. Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations). The reason the domain transfer failed. Only set for domains in TRANSFER_FAILED state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registration import Registration

# TODO update the JSON string below
json = "{}"
# create an instance of Registration from a JSON string
registration_instance = Registration.from_json(json)
# print the JSON string representation of the object
print(Registration.to_json())

# convert the object into a dict
registration_dict = registration_instance.to_dict()
# create an instance of Registration from a dict
registration_from_dict = Registration.from_dict(registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


