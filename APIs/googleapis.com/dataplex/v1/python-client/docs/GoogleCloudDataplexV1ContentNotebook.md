# GoogleCloudDataplexV1ContentNotebook

Configuration for Notebook content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kernel_type** | **str** | Required. Kernel Type of the notebook. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_content_notebook import GoogleCloudDataplexV1ContentNotebook

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ContentNotebook from a JSON string
google_cloud_dataplex_v1_content_notebook_instance = GoogleCloudDataplexV1ContentNotebook.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ContentNotebook.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_content_notebook_dict = google_cloud_dataplex_v1_content_notebook_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ContentNotebook from a dict
google_cloud_dataplex_v1_content_notebook_from_dict = GoogleCloudDataplexV1ContentNotebook.from_dict(google_cloud_dataplex_v1_content_notebook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


