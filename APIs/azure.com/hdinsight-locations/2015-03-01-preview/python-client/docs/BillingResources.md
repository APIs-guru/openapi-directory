# BillingResources

The billing resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_meters** | [**List[BillingMeters]**](BillingMeters.md) | The billing meter information. | [optional] 
**disk_billing_meters** | [**List[DiskBillingMeters]**](DiskBillingMeters.md) | The managed disk billing information. | [optional] 
**region** | **str** | The region or location. | [optional] 

## Example

```python
from openapi_client.models.billing_resources import BillingResources

# TODO update the JSON string below
json = "{}"
# create an instance of BillingResources from a JSON string
billing_resources_instance = BillingResources.from_json(json)
# print the JSON string representation of the object
print(BillingResources.to_json())

# convert the object into a dict
billing_resources_dict = billing_resources_instance.to_dict()
# create an instance of BillingResources from a dict
billing_resources_from_dict = BillingResources.from_dict(billing_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


