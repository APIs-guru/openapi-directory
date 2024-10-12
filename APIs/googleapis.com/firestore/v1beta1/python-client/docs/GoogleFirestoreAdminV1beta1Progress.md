# GoogleFirestoreAdminV1beta1Progress

Measures the progress of a particular metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**work_completed** | **str** | An estimate of how much work has been completed. Note that this may be greater than &#x60;work_estimated&#x60;. | [optional] 
**work_estimated** | **str** | An estimate of how much work needs to be performed. Zero if the work estimate is unavailable. May change as work progresses. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta1_progress import GoogleFirestoreAdminV1beta1Progress

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta1Progress from a JSON string
google_firestore_admin_v1beta1_progress_instance = GoogleFirestoreAdminV1beta1Progress.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta1Progress.to_json())

# convert the object into a dict
google_firestore_admin_v1beta1_progress_dict = google_firestore_admin_v1beta1_progress_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta1Progress from a dict
google_firestore_admin_v1beta1_progress_from_dict = GoogleFirestoreAdminV1beta1Progress.from_dict(google_firestore_admin_v1beta1_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


