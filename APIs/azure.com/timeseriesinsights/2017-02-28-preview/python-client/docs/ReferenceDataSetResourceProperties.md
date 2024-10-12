# ReferenceDataSetResourceProperties

Properties of the reference data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_properties** | [**List[ReferenceDataSetKeyProperty]**](ReferenceDataSetKeyProperty.md) | The list of key properties for the reference data set. | 
**creation_time** | **datetime** | The time the resource was created. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the resource. | [optional] [readonly] 

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


