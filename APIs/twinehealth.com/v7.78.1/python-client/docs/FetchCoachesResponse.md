# FetchCoachesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CoachResource]**](CoachResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_coaches_response import FetchCoachesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchCoachesResponse from a JSON string
fetch_coaches_response_instance = FetchCoachesResponse.from_json(json)
# print the JSON string representation of the object
print(FetchCoachesResponse.to_json())

# convert the object into a dict
fetch_coaches_response_dict = fetch_coaches_response_instance.to_dict()
# create an instance of FetchCoachesResponse from a dict
fetch_coaches_response_from_dict = FetchCoachesResponse.from_dict(fetch_coaches_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


