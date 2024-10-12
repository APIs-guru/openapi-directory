# GoogleFirebaseAppcheckV1betaUpdateServiceRequest

Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | [**GoogleFirebaseAppcheckV1betaService**](GoogleFirebaseAppcheckV1betaService.md) |  | [optional] 
**update_mask** | **str** | Required. A comma-separated list of names of fields in the Service to update. Example: &#x60;enforcement_mode&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_update_service_request import GoogleFirebaseAppcheckV1betaUpdateServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaUpdateServiceRequest from a JSON string
google_firebase_appcheck_v1beta_update_service_request_instance = GoogleFirebaseAppcheckV1betaUpdateServiceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaUpdateServiceRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_update_service_request_dict = google_firebase_appcheck_v1beta_update_service_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaUpdateServiceRequest from a dict
google_firebase_appcheck_v1beta_update_service_request_from_dict = GoogleFirebaseAppcheckV1betaUpdateServiceRequest.from_dict(google_firebase_appcheck_v1beta_update_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


