# GoogleDatastoreAdminV1PrepareStepDetails

Details for the `PREPARE` step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrency_mode** | **str** | The concurrency mode this database will use when it reaches the &#x60;REDIRECT_WRITES&#x60; step. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_prepare_step_details import GoogleDatastoreAdminV1PrepareStepDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1PrepareStepDetails from a JSON string
google_datastore_admin_v1_prepare_step_details_instance = GoogleDatastoreAdminV1PrepareStepDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1PrepareStepDetails.to_json())

# convert the object into a dict
google_datastore_admin_v1_prepare_step_details_dict = google_datastore_admin_v1_prepare_step_details_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1PrepareStepDetails from a dict
google_datastore_admin_v1_prepare_step_details_from_dict = GoogleDatastoreAdminV1PrepareStepDetails.from_dict(google_datastore_admin_v1_prepare_step_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


