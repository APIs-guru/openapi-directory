# GoogleFirebaseAppcheckV1BatchUpdateServicesResponse

Response message for the BatchUpdateServices method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | [**List[GoogleFirebaseAppcheckV1Service]**](GoogleFirebaseAppcheckV1Service.md) | Service objects after the updates have been applied. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_batch_update_services_response import GoogleFirebaseAppcheckV1BatchUpdateServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1BatchUpdateServicesResponse from a JSON string
google_firebase_appcheck_v1_batch_update_services_response_instance = GoogleFirebaseAppcheckV1BatchUpdateServicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1BatchUpdateServicesResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_batch_update_services_response_dict = google_firebase_appcheck_v1_batch_update_services_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1BatchUpdateServicesResponse from a dict
google_firebase_appcheck_v1_batch_update_services_response_from_dict = GoogleFirebaseAppcheckV1BatchUpdateServicesResponse.from_dict(google_firebase_appcheck_v1_batch_update_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


