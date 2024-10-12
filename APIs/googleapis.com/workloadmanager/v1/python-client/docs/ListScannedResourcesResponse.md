# ListScannedResourcesResponse

Message for response to list scanned resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**scanned_resources** | [**List[ScannedResource]**](ScannedResource.md) | All scanned resources in response | [optional] 

## Example

```python
from openapi_client.models.list_scanned_resources_response import ListScannedResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListScannedResourcesResponse from a JSON string
list_scanned_resources_response_instance = ListScannedResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListScannedResourcesResponse.to_json())

# convert the object into a dict
list_scanned_resources_response_dict = list_scanned_resources_response_instance.to_dict()
# create an instance of ListScannedResourcesResponse from a dict
list_scanned_resources_response_from_dict = ListScannedResourcesResponse.from_dict(list_scanned_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


