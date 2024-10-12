# BugtrackerGetSettings200Response

Alerting bugtracker resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_types** | **List[str]** | Event types enabled for bugtracker | [optional] 
**settings** | [**BugtrackerGetSettings200ResponseSettings**](BugtrackerGetSettings200ResponseSettings.md) |  | [optional] 
**state** | **str** | bugtracker state | [optional] 
**token_id** | **str** | ID of OAuth token | [optional] 
**type** | **str** | type of bugtracker | [optional] 

## Example

```python
from openapi_client.models.bugtracker_get_settings200_response import BugtrackerGetSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BugtrackerGetSettings200Response from a JSON string
bugtracker_get_settings200_response_instance = BugtrackerGetSettings200Response.from_json(json)
# print the JSON string representation of the object
print(BugtrackerGetSettings200Response.to_json())

# convert the object into a dict
bugtracker_get_settings200_response_dict = bugtracker_get_settings200_response_instance.to_dict()
# create an instance of BugtrackerGetSettings200Response from a dict
bugtracker_get_settings200_response_from_dict = BugtrackerGetSettings200Response.from_dict(bugtracker_get_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


