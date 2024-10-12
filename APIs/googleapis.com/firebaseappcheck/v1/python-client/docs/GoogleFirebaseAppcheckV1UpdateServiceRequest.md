# GoogleFirebaseAppcheckV1UpdateServiceRequest

Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | [**GoogleFirebaseAppcheckV1Service**](GoogleFirebaseAppcheckV1Service.md) |  | [optional] 
**update_mask** | **str** | Required. A comma-separated list of names of fields in the Service to update. Example: &#x60;enforcement_mode&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_update_service_request import GoogleFirebaseAppcheckV1UpdateServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1UpdateServiceRequest from a JSON string
google_firebase_appcheck_v1_update_service_request_instance = GoogleFirebaseAppcheckV1UpdateServiceRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1UpdateServiceRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_update_service_request_dict = google_firebase_appcheck_v1_update_service_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1UpdateServiceRequest from a dict
google_firebase_appcheck_v1_update_service_request_from_dict = GoogleFirebaseAppcheckV1UpdateServiceRequest.from_dict(google_firebase_appcheck_v1_update_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


