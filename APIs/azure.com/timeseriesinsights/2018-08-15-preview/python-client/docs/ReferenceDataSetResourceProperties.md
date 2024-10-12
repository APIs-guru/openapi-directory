# ReferenceDataSetResourceProperties

Properties of the reference data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_string_comparison_behavior** | **str** | The reference data set key comparison behavior can be set using this property. By default, the value is &#39;Ordinal&#39; - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When &#39;OrdinalIgnoreCase&#39; is set, case insensitive comparison will be used. | [optional] 
**key_properties** | [**List[ReferenceDataSetKeyProperty]**](ReferenceDataSetKeyProperty.md) | The list of key properties for the reference data set. | 
**creation_time** | **datetime** | The time the resource was created. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_data_set_resource_properties import ReferenceDataSetResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceDataSetResourceProperties from a JSON string
reference_data_set_resource_properties_instance = ReferenceDataSetResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ReferenceDataSetResourceProperties.to_json())

# convert the object into a dict
reference_data_set_resource_properties_dict = reference_data_set_resource_properties_instance.to_dict()
# create an instance of ReferenceDataSetResourceProperties from a dict
reference_data_set_resource_properties_from_dict = ReferenceDataSetResourceProperties.from_dict(reference_data_set_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


