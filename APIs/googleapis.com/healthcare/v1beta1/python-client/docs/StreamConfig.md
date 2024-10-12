# StreamConfig

Contains configuration for streaming FHIR export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudHealthcareV1beta1FhirBigQueryDestination**](GoogleCloudHealthcareV1beta1FhirBigQueryDestination.md) |  | [optional] 
**deidentified_store_destination** | [**DeidentifiedStoreDestination**](DeidentifiedStoreDestination.md) |  | [optional] 
**resource_types** | **List[str]** | Supply a FHIR resource type (such as \&quot;Patient\&quot; or \&quot;Observation\&quot;). See https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats an empty list as an intent to stream all the supported resource types in this FHIR store. | [optional] 

## Example

```python
from openapi_client.models.stream_config import StreamConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StreamConfig from a JSON string
stream_config_instance = StreamConfig.from_json(json)
# print the JSON string representation of the object
print(StreamConfig.to_json())

# convert the object into a dict
stream_config_dict = stream_config_instance.to_dict()
# create an instance of StreamConfig from a dict
stream_config_from_dict = StreamConfig.from_dict(stream_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


