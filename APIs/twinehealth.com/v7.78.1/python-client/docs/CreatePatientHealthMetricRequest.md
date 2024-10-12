# CreatePatientHealthMetricRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientHealthMetricCreateResource**](PatientHealthMetricCreateResource.md) |  | 
**meta** | [**CreatePatientHealthMetricRequestMeta**](CreatePatientHealthMetricRequestMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_patient_health_metric_request import CreatePatientHealthMetricRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePatientHealthMetricRequest from a JSON string
create_patient_health_metric_request_instance = CreatePatientHealthMetricRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePatientHealthMetricRequest.to_json())

# convert the object into a dict
create_patient_health_metric_request_dict = create_patient_health_metric_request_instance.to_dict()
# create an instance of CreatePatientHealthMetricRequest from a dict
create_patient_health_metric_request_from_dict = CreatePatientHealthMetricRequest.from_dict(create_patient_health_metric_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


