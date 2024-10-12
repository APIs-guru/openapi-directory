# ResourcesListResponse

A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token used to continue a truncated list request. | [optional] 
**resources** | [**List[Resource]**](Resource.md) | Resources contained in this list response. | [optional] 

## Example

```python
from openapi_client.models.resources_list_response import ResourcesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResourcesListResponse from a JSON string
resources_list_response_instance = ResourcesListResponse.from_json(json)
# print the JSON string representation of the object
print(ResourcesListResponse.to_json())

# convert the object into a dict
resources_list_response_dict = resources_list_response_instance.to_dict()
# create an instance of ResourcesListResponse from a dict
resources_list_response_from_dict = ResourcesListResponse.from_dict(resources_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


