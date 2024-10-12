# ListPhotosResponse

Response to list all photos that belong to a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**photos** | [**List[Photo]**](Photo.md) | List of photos. The pageSize field in the request determines the number of items returned. | [optional] 

## Example

```python
from openapi_client.models.list_photos_response import ListPhotosResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPhotosResponse from a JSON string
list_photos_response_instance = ListPhotosResponse.from_json(json)
# print the JSON string representation of the object
print(ListPhotosResponse.to_json())

# convert the object into a dict
list_photos_response_dict = list_photos_response_instance.to_dict()
# create an instance of ListPhotosResponse from a dict
list_photos_response_from_dict = ListPhotosResponse.from_dict(list_photos_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


