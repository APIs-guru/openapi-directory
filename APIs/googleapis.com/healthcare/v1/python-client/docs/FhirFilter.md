# FhirFilter

Filter configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | [**Resources**](Resources.md) |  | [optional] 

## Example

```python
from openapi_client.models.fhir_filter import FhirFilter

# TODO update the JSON string below
json = "{}"
# create an instance of FhirFilter from a JSON string
fhir_filter_instance = FhirFilter.from_json(json)
# print the JSON string representation of the object
print(FhirFilter.to_json())

# convert the object into a dict
fhir_filter_dict = fhir_filter_instance.to_dict()
# create an instance of FhirFilter from a dict
fhir_filter_from_dict = FhirFilter.from_dict(fhir_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


