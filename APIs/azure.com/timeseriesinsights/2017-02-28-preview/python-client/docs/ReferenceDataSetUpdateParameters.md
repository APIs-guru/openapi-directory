# ReferenceDataSetUpdateParameters

Parameters supplied to the Update Reference Data Set operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the reference data set. | [optional] 

## Example

```python
from openapi_client.models.reference_data_set_update_parameters import ReferenceDataSetUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceDataSetUpdateParameters from a JSON string
reference_data_set_update_parameters_instance = ReferenceDataSetUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ReferenceDataSetUpdateParameters.to_json())

# convert the object into a dict
reference_data_set_update_parameters_dict = reference_data_set_update_parameters_instance.to_dict()
# create an instance of ReferenceDataSetUpdateParameters from a dict
reference_data_set_update_parameters_from_dict = ReferenceDataSetUpdateParameters.from_dict(reference_data_set_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


