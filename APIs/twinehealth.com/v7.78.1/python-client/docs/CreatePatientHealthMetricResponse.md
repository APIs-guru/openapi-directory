# CreatePatientHealthMetricResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientHealthMetricResource**](PatientHealthMetricResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_patient_health_metric_response import CreatePatientHealthMetricResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePatientHealthMetricResponse from a JSON string
create_patient_health_metric_response_instance = CreatePatientHealthMetricResponse.from_json(json)
# print the JSON string representation of the object
print(CreatePatientHealthMetricResponse.to_json())

# convert the object into a dict
create_patient_health_metric_response_dict = create_patient_health_metric_response_instance.to_dict()
# create an instance of CreatePatientHealthMetricResponse from a dict
create_patient_health_metric_response_from_dict = CreatePatientHealthMetricResponse.from_dict(create_patient_health_metric_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


