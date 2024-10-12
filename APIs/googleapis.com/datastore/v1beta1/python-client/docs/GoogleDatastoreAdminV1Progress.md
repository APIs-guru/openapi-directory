# GoogleDatastoreAdminV1Progress

Measures the progress of a particular metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**work_completed** | **str** | The amount of work that has been completed. Note that this may be greater than work_estimated. | [optional] 
**work_estimated** | **str** | An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_progress import GoogleDatastoreAdminV1Progress

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1Progress from a JSON string
google_datastore_admin_v1_progress_instance = GoogleDatastoreAdminV1Progress.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1Progress.to_json())

# convert the object into a dict
google_datastore_admin_v1_progress_dict = google_datastore_admin_v1_progress_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1Progress from a dict
google_datastore_admin_v1_progress_from_dict = GoogleDatastoreAdminV1Progress.from_dict(google_datastore_admin_v1_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


