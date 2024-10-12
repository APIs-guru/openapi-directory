# GoogleCloudDataplexV1ListPartitionsResponse

List metadata partitions response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no remaining results in the list. | [optional] 
**partitions** | [**List[GoogleCloudDataplexV1Partition]**](GoogleCloudDataplexV1Partition.md) | Partitions under the specified parent entity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_partitions_response import GoogleCloudDataplexV1ListPartitionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListPartitionsResponse from a JSON string
google_cloud_dataplex_v1_list_partitions_response_instance = GoogleCloudDataplexV1ListPartitionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListPartitionsResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_partitions_response_dict = google_cloud_dataplex_v1_list_partitions_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListPartitionsResponse from a dict
google_cloud_dataplex_v1_list_partitions_response_from_dict = GoogleCloudDataplexV1ListPartitionsResponse.from_dict(google_cloud_dataplex_v1_list_partitions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


