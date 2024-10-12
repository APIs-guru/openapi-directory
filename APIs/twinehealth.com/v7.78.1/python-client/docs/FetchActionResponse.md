# FetchActionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResource**](ActionResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_action_response import FetchActionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchActionResponse from a JSON string
fetch_action_response_instance = FetchActionResponse.from_json(json)
# print the JSON string representation of the object
print(FetchActionResponse.to_json())

# convert the object into a dict
fetch_action_response_dict = fetch_action_response_instance.to_dict()
# create an instance of FetchActionResponse from a dict
fetch_action_response_from_dict = FetchActionResponse.from_dict(fetch_action_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


