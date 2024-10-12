# GetReleaseExecutableResponse

The response for FirebaseRulesService.GetReleaseExecutable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executable** | **bytearray** | Executable view of the &#x60;Ruleset&#x60; referenced by the &#x60;Release&#x60;. | [optional] 
**executable_version** | **str** | The Rules runtime version of the executable. | [optional] 
**language** | **str** | &#x60;Language&#x60; used to generate the executable bytes. | [optional] 
**ruleset_name** | **str** | &#x60;Ruleset&#x60; name associated with the &#x60;Release&#x60; executable. | [optional] 
**sync_time** | **str** | Optional, indicates the freshness of the result. The response is guaranteed to be the latest within an interval up to the sync_time (inclusive). | [optional] 
**update_time** | **str** | Timestamp for the most recent &#x60;Release.update_time&#x60;. | [optional] 

## Example

```python
from openapi_client.models.get_release_executable_response import GetReleaseExecutableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetReleaseExecutableResponse from a JSON string
get_release_executable_response_instance = GetReleaseExecutableResponse.from_json(json)
# print the JSON string representation of the object
print(GetReleaseExecutableResponse.to_json())

# convert the object into a dict
get_release_executable_response_dict = get_release_executable_response_instance.to_dict()
# create an instance of GetReleaseExecutableResponse from a dict
get_release_executable_response_from_dict = GetReleaseExecutableResponse.from_dict(get_release_executable_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


