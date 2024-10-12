# ReferenceDataSetKeyProperty

A key property for the reference data set. A reference data set can have multiple key properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the key property. | [optional] 
**type** | **str** | The type of the key property. | [optional] 

## Example

```python
from openapi_client.models.reference_data_set_key_property import ReferenceDataSetKeyProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceDataSetKeyProperty from a JSON string
reference_data_set_key_property_instance = ReferenceDataSetKeyProperty.from_json(json)
# print the JSON string representation of the object
print(ReferenceDataSetKeyProperty.to_json())

# convert the object into a dict
reference_data_set_key_property_dict = reference_data_set_key_property_instance.to_dict()
# create an instance of ReferenceDataSetKeyProperty from a dict
reference_data_set_key_property_from_dict = ReferenceDataSetKeyProperty.from_dict(reference_data_set_key_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


