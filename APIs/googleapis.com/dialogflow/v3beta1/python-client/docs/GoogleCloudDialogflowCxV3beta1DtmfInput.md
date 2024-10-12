# GoogleCloudDialogflowCxV3beta1DtmfInput

Represents the input for dtmf event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digits** | **str** | The dtmf digits. | [optional] 
**finish_digit** | **str** | The finish digit (if any). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_dtmf_input import GoogleCloudDialogflowCxV3beta1DtmfInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1DtmfInput from a JSON string
google_cloud_dialogflow_cx_v3beta1_dtmf_input_instance = GoogleCloudDialogflowCxV3beta1DtmfInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1DtmfInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_dtmf_input_dict = google_cloud_dialogflow_cx_v3beta1_dtmf_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1DtmfInput from a dict
google_cloud_dialogflow_cx_v3beta1_dtmf_input_from_dict = GoogleCloudDialogflowCxV3beta1DtmfInput.from_dict(google_cloud_dialogflow_cx_v3beta1_dtmf_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


