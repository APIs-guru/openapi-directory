# GoogleFirestoreAdminV1Progress

Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_work** | **str** | The amount of work completed. | [optional] 
**estimated_work** | **str** | The amount of work estimated. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_progress import GoogleFirestoreAdminV1Progress

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1Progress from a JSON string
google_firestore_admin_v1_progress_instance = GoogleFirestoreAdminV1Progress.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1Progress.to_json())

# convert the object into a dict
google_firestore_admin_v1_progress_dict = google_firestore_admin_v1_progress_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1Progress from a dict
google_firestore_admin_v1_progress_from_dict = GoogleFirestoreAdminV1Progress.from_dict(google_firestore_admin_v1_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


