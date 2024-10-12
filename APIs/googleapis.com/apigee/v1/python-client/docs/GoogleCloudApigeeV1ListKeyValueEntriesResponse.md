# GoogleCloudApigeeV1ListKeyValueEntriesResponse

The request structure for listing key value map keys and its corresponding values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_value_entries** | [**List[GoogleCloudApigeeV1KeyValueEntry]**](GoogleCloudApigeeV1KeyValueEntry.md) | One or more key value map keys and values. | [optional] 
**next_page_token** | **str** | Token that can be sent as &#x60;next_page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_key_value_entries_response import GoogleCloudApigeeV1ListKeyValueEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListKeyValueEntriesResponse from a JSON string
google_cloud_apigee_v1_list_key_value_entries_response_instance = GoogleCloudApigeeV1ListKeyValueEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListKeyValueEntriesResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_key_value_entries_response_dict = google_cloud_apigee_v1_list_key_value_entries_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListKeyValueEntriesResponse from a dict
google_cloud_apigee_v1_list_key_value_entries_response_from_dict = GoogleCloudApigeeV1ListKeyValueEntriesResponse.from_dict(google_cloud_apigee_v1_list_key_value_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


