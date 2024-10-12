# ReferenceDataSetCreateOrUpdateParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReferenceDataSetCreationProperties**](ReferenceDataSetCreationProperties.md) |  | 
**location** | **str** | The location of the resource. | 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the resource. | [optional] 

## Example

```python
from openapi_client.models.reference_data_set_create_or_update_parameters import ReferenceDataSetCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceDataSetCreateOrUpdateParameters from a JSON string
reference_data_set_create_or_update_parameters_instance = ReferenceDataSetCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ReferenceDataSetCreateOrUpdateParameters.to_json())

# convert the object into a dict
reference_data_set_create_or_update_parameters_dict = reference_data_set_create_or_update_parameters_instance.to_dict()
# create an instance of ReferenceDataSetCreateOrUpdateParameters from a dict
reference_data_set_create_or_update_parameters_from_dict = ReferenceDataSetCreateOrUpdateParameters.from_dict(reference_data_set_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


