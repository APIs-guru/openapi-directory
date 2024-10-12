# GoogleCloudDataplexV1ListDataTaxonomiesResponse

List DataTaxonomies response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_taxonomies** | [**List[GoogleCloudDataplexV1DataTaxonomy]**](GoogleCloudDataplexV1DataTaxonomy.md) | DataTaxonomies under the given parent location. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable_locations** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_data_taxonomies_response import GoogleCloudDataplexV1ListDataTaxonomiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListDataTaxonomiesResponse from a JSON string
google_cloud_dataplex_v1_list_data_taxonomies_response_instance = GoogleCloudDataplexV1ListDataTaxonomiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListDataTaxonomiesResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_data_taxonomies_response_dict = google_cloud_dataplex_v1_list_data_taxonomies_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListDataTaxonomiesResponse from a dict
google_cloud_dataplex_v1_list_data_taxonomies_response_from_dict = GoogleCloudDataplexV1ListDataTaxonomiesResponse.from_dict(google_cloud_dataplex_v1_list_data_taxonomies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


