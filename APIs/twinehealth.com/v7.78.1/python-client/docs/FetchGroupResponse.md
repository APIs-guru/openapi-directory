# FetchGroupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GroupResource**](GroupResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_group_response import FetchGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchGroupResponse from a JSON string
fetch_group_response_instance = FetchGroupResponse.from_json(json)
# print the JSON string representation of the object
print(FetchGroupResponse.to_json())

# convert the object into a dict
fetch_group_response_dict = fetch_group_response_instance.to_dict()
# create an instance of FetchGroupResponse from a dict
fetch_group_response_from_dict = FetchGroupResponse.from_dict(fetch_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


