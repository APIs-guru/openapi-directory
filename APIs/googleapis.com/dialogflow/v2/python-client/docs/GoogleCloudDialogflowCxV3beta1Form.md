# GoogleCloudDialogflowCxV3beta1Form

A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**List[GoogleCloudDialogflowCxV3beta1FormParameter]**](GoogleCloudDialogflowCxV3beta1FormParameter.md) | Parameters to collect from the user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_form import GoogleCloudDialogflowCxV3beta1Form

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1Form from a JSON string
google_cloud_dialogflow_cx_v3beta1_form_instance = GoogleCloudDialogflowCxV3beta1Form.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1Form.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_form_dict = google_cloud_dialogflow_cx_v3beta1_form_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1Form from a dict
google_cloud_dialogflow_cx_v3beta1_form_from_dict = GoogleCloudDialogflowCxV3beta1Form.from_dict(google_cloud_dialogflow_cx_v3beta1_form_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


