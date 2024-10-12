# TerritoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Territory]**](Territory.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.territories_response import TerritoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TerritoriesResponse from a JSON string
territories_response_instance = TerritoriesResponse.from_json(json)
# print the JSON string representation of the object
print(TerritoriesResponse.to_json())

# convert the object into a dict
territories_response_dict = territories_response_instance.to_dict()
# create an instance of TerritoriesResponse from a dict
territories_response_from_dict = TerritoriesResponse.from_dict(territories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


