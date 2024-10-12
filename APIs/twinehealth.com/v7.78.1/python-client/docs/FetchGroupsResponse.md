# FetchGroupsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GroupResource]**](GroupResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_groups_response import FetchGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchGroupsResponse from a JSON string
fetch_groups_response_instance = FetchGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchGroupsResponse.to_json())

# convert the object into a dict
fetch_groups_response_dict = fetch_groups_response_instance.to_dict()
# create an instance of FetchGroupsResponse from a dict
fetch_groups_response_from_dict = FetchGroupsResponse.from_dict(fetch_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


