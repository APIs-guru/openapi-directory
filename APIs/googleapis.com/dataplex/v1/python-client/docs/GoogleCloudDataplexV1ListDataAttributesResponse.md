# GoogleCloudDataplexV1ListDataAttributesResponse

List DataAttributes response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_attributes** | [**List[GoogleCloudDataplexV1DataAttribute]**](GoogleCloudDataplexV1DataAttribute.md) | DataAttributes under the given parent DataTaxonomy. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable_locations** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_data_attributes_response import GoogleCloudDataplexV1ListDataAttributesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListDataAttributesResponse from a JSON string
google_cloud_dataplex_v1_list_data_attributes_response_instance = GoogleCloudDataplexV1ListDataAttributesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListDataAttributesResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_data_attributes_response_dict = google_cloud_dataplex_v1_list_data_attributes_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListDataAttributesResponse from a dict
google_cloud_dataplex_v1_list_data_attributes_response_from_dict = GoogleCloudDataplexV1ListDataAttributesResponse.from_dict(google_cloud_dataplex_v1_list_data_attributes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


