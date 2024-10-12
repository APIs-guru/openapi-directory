# RemoteModelInfo

Remote Model Info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection** | **str** | Output only. Fully qualified name of the user-provided connection object of the remote model. Format: &#x60;&#x60;&#x60;\&quot;projects/{project_id}/locations/{location_id}/connections/{connection_id}\&quot;&#x60;&#x60;&#x60; | [optional] [readonly] 
**endpoint** | **str** | Output only. The endpoint for remote model. | [optional] [readonly] 
**max_batching_rows** | **str** | Output only. Max number of rows in each batch sent to the remote service. If unset, the number of rows in each batch is set dynamically. | [optional] [readonly] 
**remote_model_version** | **str** | Output only. The model version for LLM. | [optional] [readonly] 
**remote_service_type** | **str** | Output only. The remote service type for remote model. | [optional] [readonly] 
**speech_recognizer** | **str** | Output only. The name of the speech recognizer to use for speech recognition. The expected format is &#x60;projects/{project}/locations/{location}/recognizers/{recognizer}&#x60;. Customers can specify this field at model creation. If not specified, a default recognizer &#x60;projects/{model project}/locations/global/recognizers/_&#x60; will be used. See more details at [recognizers](https://cloud.google.com/speech-to-text/v2/docs/reference/rest/v2/projects.locations.recognizers) | [optional] [readonly] 

## Example

```python
from openapi_client.models.remote_model_info import RemoteModelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteModelInfo from a JSON string
remote_model_info_instance = RemoteModelInfo.from_json(json)
# print the JSON string representation of the object
print(RemoteModelInfo.to_json())

# convert the object into a dict
remote_model_info_dict = remote_model_info_instance.to_dict()
# create an instance of RemoteModelInfo from a dict
remote_model_info_from_dict = RemoteModelInfo.from_dict(remote_model_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


