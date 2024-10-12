# StreamMapping

A mapping of a Firebase App to a Google Analytics data stream

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | **str** | The resource name of the Firebase App associated with the Google Analytics data stream, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID or projects/PROJECT_IDENTIFIER/iosApps/APP_ID or projects/PROJECT_IDENTIFIER /webApps/APP_ID Refer to the &#x60;FirebaseProject&#x60; [&#x60;name&#x60;](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. | [optional] 
**measurement_id** | **str** | Applicable for Firebase Web Apps only. The unique Google-assigned identifier of the Google Analytics web stream associated with the Firebase Web App. Firebase SDKs use this ID to interact with Google Analytics APIs. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153). | [optional] 
**stream_id** | **str** | The unique Google-assigned identifier of the Google Analytics data stream associated with the Firebase App. Learn more about Google Analytics data streams in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). | [optional] 

## Example

```python
from openapi_client.models.stream_mapping import StreamMapping

# TODO update the JSON string below
json = "{}"
# create an instance of StreamMapping from a JSON string
stream_mapping_instance = StreamMapping.from_json(json)
# print the JSON string representation of the object
print(StreamMapping.to_json())

# convert the object into a dict
stream_mapping_dict = stream_mapping_instance.to_dict()
# create an instance of StreamMapping from a dict
stream_mapping_from_dict = StreamMapping.from_dict(stream_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


