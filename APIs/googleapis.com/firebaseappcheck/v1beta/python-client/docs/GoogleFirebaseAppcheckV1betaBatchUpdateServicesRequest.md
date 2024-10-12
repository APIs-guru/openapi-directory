# GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest

Request message for the BatchUpdateServices method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleFirebaseAppcheckV1betaUpdateServiceRequest]**](GoogleFirebaseAppcheckV1betaUpdateServiceRequest.md) | Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch. | [optional] 
**update_mask** | **str** | Optional. A comma-separated list of names of fields in the Services to update. Example: &#x60;display_name&#x60;. If this field is present, the &#x60;update_mask&#x60; field in the UpdateServiceRequest messages must all match this field, or the entire batch fails and no updates will be committed. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_batch_update_services_request import GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest from a JSON string
google_firebase_appcheck_v1beta_batch_update_services_request_instance = GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_batch_update_services_request_dict = google_firebase_appcheck_v1beta_batch_update_services_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest from a dict
google_firebase_appcheck_v1beta_batch_update_services_request_from_dict = GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest.from_dict(google_firebase_appcheck_v1beta_batch_update_services_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


