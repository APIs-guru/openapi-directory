# BillingResponseListResult

The response for the operation to get regional billingSpecs for a subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_resources** | [**List[BillingResources]**](BillingResources.md) | The billing and managed disk billing resources for a region. | [optional] 
**vm_size_filters** | [**List[VmSizeCompatibilityFilterV2]**](VmSizeCompatibilityFilterV2.md) | The virtual machine filtering mode. Effectively this can enabling or disabling the virtual machine sizes in a particular set. | [optional] 
**vm_sizes** | **List[str]** | The virtual machine sizes to include or exclude. | [optional] 

## Example

```python
from openapi_client.models.billing_response_list_result import BillingResponseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BillingResponseListResult from a JSON string
billing_response_list_result_instance = BillingResponseListResult.from_json(json)
# print the JSON string representation of the object
print(BillingResponseListResult.to_json())

# convert the object into a dict
billing_response_list_result_dict = billing_response_list_result_instance.to_dict()
# create an instance of BillingResponseListResult from a dict
billing_response_list_result_from_dict = BillingResponseListResult.from_dict(billing_response_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


