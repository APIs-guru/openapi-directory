# GoogleCloudApigeeV1ListDatastoresResponse

The response for ListDatastores

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datastores** | [**List[GoogleCloudApigeeV1Datastore]**](GoogleCloudApigeeV1Datastore.md) | A list of datastores | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_datastores_response import GoogleCloudApigeeV1ListDatastoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListDatastoresResponse from a JSON string
google_cloud_apigee_v1_list_datastores_response_instance = GoogleCloudApigeeV1ListDatastoresResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListDatastoresResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_datastores_response_dict = google_cloud_apigee_v1_list_datastores_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListDatastoresResponse from a dict
google_cloud_apigee_v1_list_datastores_response_from_dict = GoogleCloudApigeeV1ListDatastoresResponse.from_dict(google_cloud_apigee_v1_list_datastores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


