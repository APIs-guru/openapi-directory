# FetchPatientHealthMetricResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PatientHealthMetricResource]**](PatientHealthMetricResource.md) |  | 
**links** | [**CollectionResponseLinks**](CollectionResponseLinks.md) |  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_patient_health_metric_response import FetchPatientHealthMetricResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchPatientHealthMetricResponse from a JSON string
fetch_patient_health_metric_response_instance = FetchPatientHealthMetricResponse.from_json(json)
# print the JSON string representation of the object
print(FetchPatientHealthMetricResponse.to_json())

# convert the object into a dict
fetch_patient_health_metric_response_dict = fetch_patient_health_metric_response_instance.to_dict()
# create an instance of FetchPatientHealthMetricResponse from a dict
fetch_patient_health_metric_response_from_dict = FetchPatientHealthMetricResponse.from_dict(fetch_patient_health_metric_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


