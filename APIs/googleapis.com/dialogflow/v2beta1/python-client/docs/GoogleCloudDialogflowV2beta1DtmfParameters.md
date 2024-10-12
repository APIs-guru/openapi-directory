# GoogleCloudDialogflowV2beta1DtmfParameters

The message in the response that indicates the parameters of DTMF.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepts_dtmf_input** | **bool** | Indicates whether DTMF input can be handled in the next request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_dtmf_parameters import GoogleCloudDialogflowV2beta1DtmfParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1DtmfParameters from a JSON string
google_cloud_dialogflow_v2beta1_dtmf_parameters_instance = GoogleCloudDialogflowV2beta1DtmfParameters.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1DtmfParameters.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_dtmf_parameters_dict = google_cloud_dialogflow_v2beta1_dtmf_parameters_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1DtmfParameters from a dict
google_cloud_dialogflow_v2beta1_dtmf_parameters_from_dict = GoogleCloudDialogflowV2beta1DtmfParameters.from_dict(google_cloud_dialogflow_v2beta1_dtmf_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


