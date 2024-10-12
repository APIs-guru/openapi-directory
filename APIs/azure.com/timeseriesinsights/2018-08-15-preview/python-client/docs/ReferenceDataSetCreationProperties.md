# ReferenceDataSetCreationProperties

Properties used to create a reference data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_string_comparison_behavior** | **str** | The reference data set key comparison behavior can be set using this property. By default, the value is &#39;Ordinal&#39; - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When &#39;OrdinalIgnoreCase&#39; is set, case insensitive comparison will be used. | [optional] 
**key_properties** | [**List[ReferenceDataSetKeyProperty]**](ReferenceDataSetKeyProperty.md) | The list of key properties for the reference data set. | 

## Example

```python
from openapi_client.models.reference_data_set_creation_properties import ReferenceDataSetCreationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceDataSetCreationProperties from a JSON string
reference_data_set_creation_properties_instance = ReferenceDataSetCreationProperties.from_json(json)
# print the JSON string representation of the object
print(ReferenceDataSetCreationProperties.to_json())

# convert the object into a dict
reference_data_set_creation_properties_dict = reference_data_set_creation_properties_instance.to_dict()
# create an instance of ReferenceDataSetCreationProperties from a dict
reference_data_set_creation_properties_from_dict = ReferenceDataSetCreationProperties.from_dict(reference_data_set_creation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


