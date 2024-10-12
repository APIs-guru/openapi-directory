# ListVolumesResponse

Response message containing the list of storage volumes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token identifying a page of results from the server. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 
**volumes** | [**List[Volume]**](Volume.md) | The list of storage volumes. | [optional] 

## Example

```python
from openapi_client.models.list_volumes_response import ListVolumesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVolumesResponse from a JSON string
list_volumes_response_instance = ListVolumesResponse.from_json(json)
# print the JSON string representation of the object
print(ListVolumesResponse.to_json())

# convert the object into a dict
list_volumes_response_dict = list_volumes_response_instance.to_dict()
# create an instance of ListVolumesResponse from a dict
list_volumes_response_from_dict = ListVolumesResponse.from_dict(list_volumes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


