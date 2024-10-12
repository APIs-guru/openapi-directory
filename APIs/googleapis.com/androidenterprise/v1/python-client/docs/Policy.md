# Policy

The device policy for a given managed device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_update_policy** | **str** | Controls when automatic app updates on the device can be applied. Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency. When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, autoUpdatePolicy has no effect. \&quot;choiceToTheUser\&quot; allows the device&#39;s user to configure the app update policy. \&quot;always\&quot; enables auto updates. \&quot;never\&quot; disables auto updates. \&quot;wifiOnly\&quot; enables auto updates only when the device is connected to wifi. | [optional] 
**device_report_policy** | **str** | Whether the device reports app states to the EMM. The default value is \&quot;deviceReportDisabled\&quot;. | [optional] 
**maintenance_window** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] 
**product_availability_policy** | **str** | The availability granted to the device for the specified products. \&quot;all\&quot; gives the device access to all products, regardless of approval status. \&quot;all\&quot; does not enable automatic visibility of \&quot;alpha\&quot; or \&quot;beta\&quot; tracks. \&quot;whitelist\&quot; grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default. | [optional] 
**product_policy** | [**List[ProductPolicy]**](ProductPolicy.md) | The list of product policies. The productAvailabilityPolicy needs to be set to WHITELIST or ALL for the product policies to be applied. | [optional] 

## Example

```python
from openapi_client.models.policy import Policy

# TODO update the JSON string below
json = "{}"
# create an instance of Policy from a JSON string
policy_instance = Policy.from_json(json)
# print the JSON string representation of the object
print(Policy.to_json())

# convert the object into a dict
policy_dict = policy_instance.to_dict()
# create an instance of Policy from a dict
policy_from_dict = Policy.from_dict(policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


