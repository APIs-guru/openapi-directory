# GetAncestryResponse

Response from the projects.getAncestry method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestor** | [**List[Ancestor]**](Ancestor.md) | Ancestors are ordered from bottom to top of the resource hierarchy. The first ancestor is the project itself, followed by the project&#39;s parent, etc. | [optional] 

## Example

```python
from openapi_client.models.get_ancestry_response import GetAncestryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAncestryResponse from a JSON string
get_ancestry_response_instance = GetAncestryResponse.from_json(json)
# print the JSON string representation of the object
print(GetAncestryResponse.to_json())

# convert the object into a dict
get_ancestry_response_dict = get_ancestry_response_instance.to_dict()
# create an instance of GetAncestryResponse from a dict
get_ancestry_response_from_dict = GetAncestryResponse.from_dict(get_ancestry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


