# ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan

Start and end times for a build execution phase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | End of time span. | [optional] 
**start_time** | **str** | Start of time span. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_time_span import ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_time_span_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_time_span_dict = containeranalysis_google_devtools_cloudbuild_v1_time_span_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan from a dict
containeranalysis_google_devtools_cloudbuild_v1_time_span_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan.from_dict(containeranalysis_google_devtools_cloudbuild_v1_time_span_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


