# QuotasList200ResponseValueInnerProperties

Properties for a Compute Quota

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_set_count** | **int** | Maximum number of availability sets allowed. | [optional] 
**cores_limit** | **int** | Maximum number of cores allowed. | [optional] 
**max_allocation_premium_managed_disks_and_snapshots** | **int** | Maximum number of managed disks and snapshots of type premium allowed. | [optional] 
**max_allocation_standard_managed_disks_and_snapshots** | **int** | Maximum number of managed disks and snapshots of type standard allowed. | [optional] 
**virtual_machine_count** | **int** | Maximum number of virtual machines allowed. | [optional] 
**vm_scale_set_count** | **int** | Maximum number of scale sets allowed. | [optional] 

## Example

```python
from openapi_client.models.quotas_list200_response_value_inner_properties import QuotasList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QuotasList200ResponseValueInnerProperties from a JSON string
quotas_list200_response_value_inner_properties_instance = QuotasList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(QuotasList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
quotas_list200_response_value_inner_properties_dict = quotas_list200_response_value_inner_properties_instance.to_dict()
# create an instance of QuotasList200ResponseValueInnerProperties from a dict
quotas_list200_response_value_inner_properties_from_dict = QuotasList200ResponseValueInnerProperties.from_dict(quotas_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


