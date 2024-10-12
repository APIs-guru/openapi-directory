# Configuration

A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** | Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning. | [optional] 
**configuration_id** | **str** | Output only. The ID of the configuration. Assigned by the server. | [optional] [readonly] 
**configuration_name** | **str** | Required. A short name that describes the configuration&#39;s purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins. | [optional] 
**contact_email** | **str** | Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input. | [optional] 
**contact_phone** | **str** | Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses. | [optional] 
**custom_message** | **str** | A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned. | [optional] 
**dpc_extras** | **str** | The JSON-formatted EMM provisioning extras that are passed to the DPC. | [optional] 
**dpc_resource_path** | **str** | Required. The resource name of the selected DPC (device policy controller) in the format &#x60;customers/[CUSTOMER_ID]/dpcs/*&#x60;. To list the supported DPCs, call &#x60;customers.dpcs.list&#x60;. | [optional] 
**forced_reset_time** | **str** | Optional. The timeout before forcing factory reset the device if the device doesn&#39;t go through provisioning in the setup wizard, usually due to lack of network connectivity during setup wizard. Ranges from 0-6 hours, with 2 hours being the default if unset. | [optional] 
**is_default** | **bool** | Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to &#x60;true&#x60;, changes the previous default configuration&#39;s &#x60;isDefault&#x60; value to &#x60;false&#x60;. | [optional] 
**name** | **str** | Output only. The API resource name in the format &#x60;customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]&#x60;. Assigned by the server. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration import Configuration

# TODO update the JSON string below
json = "{}"
# create an instance of Configuration from a JSON string
configuration_instance = Configuration.from_json(json)
# print the JSON string representation of the object
print(Configuration.to_json())

# convert the object into a dict
configuration_dict = configuration_instance.to_dict()
# create an instance of Configuration from a dict
configuration_from_dict = Configuration.from_dict(configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


