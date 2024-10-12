# DeidentifyOperationMetadata

Details about the work the de-identify operation performed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fhir_output** | [**FhirOutput**](FhirOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.deidentify_operation_metadata import DeidentifyOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeidentifyOperationMetadata from a JSON string
deidentify_operation_metadata_instance = DeidentifyOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(DeidentifyOperationMetadata.to_json())

# convert the object into a dict
deidentify_operation_metadata_dict = deidentify_operation_metadata_instance.to_dict()
# create an instance of DeidentifyOperationMetadata from a dict
deidentify_operation_metadata_from_dict = DeidentifyOperationMetadata.from_dict(deidentify_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


