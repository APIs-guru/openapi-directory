# GoogleCloudAiplatformV1NotebookReservationAffinity

Notebook Reservation Affinity for consuming Zonal reservation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consume_reservation_type** | **str** | Required. Specifies the type of reservation from which this instance can consume resources: RESERVATION_ANY (default), RESERVATION_SPECIFIC, or RESERVATION_NONE. See Consuming reserved instances for examples. | [optional] 
**key** | **str** | Optional. Corresponds to the label key of a reservation resource. To target a RESERVATION_SPECIFIC by name, use compute.googleapis.com/reservation-name as the key and specify the name of your reservation as its value. | [optional] 
**values** | **List[str]** | Optional. Corresponds to the label values of a reservation resource. This must be the full path name of Reservation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_notebook_reservation_affinity import GoogleCloudAiplatformV1NotebookReservationAffinity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NotebookReservationAffinity from a JSON string
google_cloud_aiplatform_v1_notebook_reservation_affinity_instance = GoogleCloudAiplatformV1NotebookReservationAffinity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NotebookReservationAffinity.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_notebook_reservation_affinity_dict = google_cloud_aiplatform_v1_notebook_reservation_affinity_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NotebookReservationAffinity from a dict
google_cloud_aiplatform_v1_notebook_reservation_affinity_from_dict = GoogleCloudAiplatformV1NotebookReservationAffinity.from_dict(google_cloud_aiplatform_v1_notebook_reservation_affinity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


