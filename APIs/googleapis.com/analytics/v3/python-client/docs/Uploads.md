# Uploads

Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Upload]**](Upload.md) | A list of uploads. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#uploads']
**next_link** | **str** | Link to next page for this upload collection. | [optional] 
**previous_link** | **str** | Link to previous page for this upload collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of resources in the result. | [optional] 

## Example

```python
from openapi_client.models.uploads import Uploads

# TODO update the JSON string below
json = "{}"
# create an instance of Uploads from a JSON string
uploads_instance = Uploads.from_json(json)
# print the JSON string representation of the object
print(Uploads.to_json())

# convert the object into a dict
uploads_dict = uploads_instance.to_dict()
# create an instance of Uploads from a dict
uploads_from_dict = Uploads.from_dict(uploads_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


