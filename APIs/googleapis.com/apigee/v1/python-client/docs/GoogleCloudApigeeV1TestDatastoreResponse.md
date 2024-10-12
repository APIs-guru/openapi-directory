# GoogleCloudApigeeV1TestDatastoreResponse

The response for TestDatastore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Output only. Error message of test connection failure | [optional] [readonly] 
**state** | **str** | Output only. It could be &#x60;completed&#x60; or &#x60;failed&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_test_datastore_response import GoogleCloudApigeeV1TestDatastoreResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1TestDatastoreResponse from a JSON string
google_cloud_apigee_v1_test_datastore_response_instance = GoogleCloudApigeeV1TestDatastoreResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1TestDatastoreResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_test_datastore_response_dict = google_cloud_apigee_v1_test_datastore_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1TestDatastoreResponse from a dict
google_cloud_apigee_v1_test_datastore_response_from_dict = GoogleCloudApigeeV1TestDatastoreResponse.from_dict(google_cloud_apigee_v1_test_datastore_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


