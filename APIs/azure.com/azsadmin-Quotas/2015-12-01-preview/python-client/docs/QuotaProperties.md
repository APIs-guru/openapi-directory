# QuotaProperties

Properties for a Quota

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_set_count** | **int** | Maximum number of availability sets allowed. | [optional] 
**cores_limit** | **int** | Maximum number of core allowed. | [optional] 
**virtual_machine_count** | **int** | Maximum number of virtual machines allowed. | [optional] 
**vm_scale_set_count** | **int** | Maximum number of scale sets allowed. | [optional] 

## Example

```python
from openapi_client.models.quota_properties import QuotaProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaProperties from a JSON string
quota_properties_instance = QuotaProperties.from_json(json)
# print the JSON string representation of the object
print(QuotaProperties.to_json())

# convert the object into a dict
quota_properties_dict = quota_properties_instance.to_dict()
# create an instance of QuotaProperties from a dict
quota_properties_from_dict = QuotaProperties.from_dict(quota_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


