# ReferenceInputDataSource

Describes an input data source that contains reference data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.reference_input_data_source import ReferenceInputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceInputDataSource from a JSON string
reference_input_data_source_instance = ReferenceInputDataSource.from_json(json)
# print the JSON string representation of the object
print(ReferenceInputDataSource.to_json())

# convert the object into a dict
reference_input_data_source_dict = reference_input_data_source_instance.to_dict()
# create an instance of ReferenceInputDataSource from a dict
reference_input_data_source_from_dict = ReferenceInputDataSource.from_dict(reference_input_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


