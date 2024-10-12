# FetchCoachResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CoachResource**](CoachResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_coach_response import FetchCoachResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchCoachResponse from a JSON string
fetch_coach_response_instance = FetchCoachResponse.from_json(json)
# print the JSON string representation of the object
print(FetchCoachResponse.to_json())

# convert the object into a dict
fetch_coach_response_dict = fetch_coach_response_instance.to_dict()
# create an instance of FetchCoachResponse from a dict
fetch_coach_response_from_dict = FetchCoachResponse.from_dict(fetch_coach_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


