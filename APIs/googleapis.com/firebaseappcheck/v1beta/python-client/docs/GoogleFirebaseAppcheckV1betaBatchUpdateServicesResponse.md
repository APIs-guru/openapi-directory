# GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse

Response message for the BatchUpdateServices method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | [**List[GoogleFirebaseAppcheckV1betaService]**](GoogleFirebaseAppcheckV1betaService.md) | Service objects after the updates have been applied. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_batch_update_services_response import GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse from a JSON string
google_firebase_appcheck_v1beta_batch_update_services_response_instance = GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_batch_update_services_response_dict = google_firebase_appcheck_v1beta_batch_update_services_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse from a dict
google_firebase_appcheck_v1beta_batch_update_services_response_from_dict = GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse.from_dict(google_firebase_appcheck_v1beta_batch_update_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


