# CreatePatientHealthMetricRequestMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_duplicates** | **bool** | If &#x60;true&#x60;, the patient health metric will be ignored if there is an existing patient health metric for the same patient, with the same &#x60;type&#x60; and same &#x60;occurred_at&#x60;.  | [optional] 

## Example

```python
from openapi_client.models.create_patient_health_metric_request_meta import CreatePatientHealthMetricRequestMeta

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePatientHealthMetricRequestMeta from a JSON string
create_patient_health_metric_request_meta_instance = CreatePatientHealthMetricRequestMeta.from_json(json)
# print the JSON string representation of the object
print(CreatePatientHealthMetricRequestMeta.to_json())

# convert the object into a dict
create_patient_health_metric_request_meta_dict = create_patient_health_metric_request_meta_instance.to_dict()
# create an instance of CreatePatientHealthMetricRequestMeta from a dict
create_patient_health_metric_request_meta_from_dict = CreatePatientHealthMetricRequestMeta.from_dict(create_patient_health_metric_request_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


