# BuildIconsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BuildIcon]**](BuildIcon.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_icons_response import BuildIconsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BuildIconsResponse from a JSON string
build_icons_response_instance = BuildIconsResponse.from_json(json)
# print the JSON string representation of the object
print(BuildIconsResponse.to_json())

# convert the object into a dict
build_icons_response_dict = build_icons_response_instance.to_dict()
# create an instance of BuildIconsResponse from a dict
build_icons_response_from_dict = BuildIconsResponse.from_dict(build_icons_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


