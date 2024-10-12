# IntuneAppsResponse

IntuneAppsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | App id | [optional] 
**created_month** | **str** | PartitionKey year-month | [optional] 
**refresh_status** | **str** | Refresh Status | [optional] 

## Example

```python
from openapi_client.models.intune_apps_response import IntuneAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneAppsResponse from a JSON string
intune_apps_response_instance = IntuneAppsResponse.from_json(json)
# print the JSON string representation of the object
print(IntuneAppsResponse.to_json())

# convert the object into a dict
intune_apps_response_dict = intune_apps_response_instance.to_dict()
# create an instance of IntuneAppsResponse from a dict
intune_apps_response_from_dict = IntuneAppsResponse.from_dict(intune_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


