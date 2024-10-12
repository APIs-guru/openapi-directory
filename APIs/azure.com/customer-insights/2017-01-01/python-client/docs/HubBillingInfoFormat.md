# HubBillingInfoFormat

Hub billing info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_units** | **int** | The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions. | [optional] 
**min_units** | **int** | The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions. | [optional] 
**sku_name** | **str** | The sku name. | [optional] 

## Example

```python
from openapi_client.models.hub_billing_info_format import HubBillingInfoFormat

# TODO update the JSON string below
json = "{}"
# create an instance of HubBillingInfoFormat from a JSON string
hub_billing_info_format_instance = HubBillingInfoFormat.from_json(json)
# print the JSON string representation of the object
print(HubBillingInfoFormat.to_json())

# convert the object into a dict
hub_billing_info_format_dict = hub_billing_info_format_instance.to_dict()
# create an instance of HubBillingInfoFormat from a dict
hub_billing_info_format_from_dict = HubBillingInfoFormat.from_dict(hub_billing_info_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


