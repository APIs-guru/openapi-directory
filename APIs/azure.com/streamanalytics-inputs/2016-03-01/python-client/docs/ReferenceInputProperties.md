# ReferenceInputProperties

The properties that are associated with an input containing reference data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasource** | [**ReferenceInputDataSource**](ReferenceInputDataSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_input_properties import ReferenceInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceInputProperties from a JSON string
reference_input_properties_instance = ReferenceInputProperties.from_json(json)
# print the JSON string representation of the object
print(ReferenceInputProperties.to_json())

# convert the object into a dict
reference_input_properties_dict = reference_input_properties_instance.to_dict()
# create an instance of ReferenceInputProperties from a dict
reference_input_properties_from_dict = ReferenceInputProperties.from_dict(reference_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


