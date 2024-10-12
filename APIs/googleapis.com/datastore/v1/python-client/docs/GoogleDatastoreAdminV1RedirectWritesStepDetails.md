# GoogleDatastoreAdminV1RedirectWritesStepDetails

Details for the `REDIRECT_WRITES` step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrency_mode** | **str** | Ths concurrency mode for this database. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_redirect_writes_step_details import GoogleDatastoreAdminV1RedirectWritesStepDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1RedirectWritesStepDetails from a JSON string
google_datastore_admin_v1_redirect_writes_step_details_instance = GoogleDatastoreAdminV1RedirectWritesStepDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1RedirectWritesStepDetails.to_json())

# convert the object into a dict
google_datastore_admin_v1_redirect_writes_step_details_dict = google_datastore_admin_v1_redirect_writes_step_details_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1RedirectWritesStepDetails from a dict
google_datastore_admin_v1_redirect_writes_step_details_from_dict = GoogleDatastoreAdminV1RedirectWritesStepDetails.from_dict(google_datastore_admin_v1_redirect_writes_step_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


