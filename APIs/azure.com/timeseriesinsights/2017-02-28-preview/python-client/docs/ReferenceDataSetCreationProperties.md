# ReferenceDataSetCreationProperties

Properties used to create a reference data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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


