# FetchHealthProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**HealthProfileResource**](HealthProfileResource.md) |  | 
**included** | [**List[Resource]**](Resource.md) | Related resources which are included in the response based on the &#x60;include&#x60; param. Attributes of each resource will vary depending on the type. See [patient](#operation/fetchPatient), [question](#operation/fetchHealthProfileQuestion)  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_health_profile_response import FetchHealthProfileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchHealthProfileResponse from a JSON string
fetch_health_profile_response_instance = FetchHealthProfileResponse.from_json(json)
# print the JSON string representation of the object
print(FetchHealthProfileResponse.to_json())

# convert the object into a dict
fetch_health_profile_response_dict = fetch_health_profile_response_instance.to_dict()
# create an instance of FetchHealthProfileResponse from a dict
fetch_health_profile_response_from_dict = FetchHealthProfileResponse.from_dict(fetch_health_profile_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


