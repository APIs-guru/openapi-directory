# MobileAppsListResponse

Mobile app List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#mobileAppsListResponse\&quot;. | [optional] 
**mobile_apps** | [**List[MobileApp]**](MobileApp.md) | Mobile apps collection. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.mobile_apps_list_response import MobileAppsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MobileAppsListResponse from a JSON string
mobile_apps_list_response_instance = MobileAppsListResponse.from_json(json)
# print the JSON string representation of the object
print(MobileAppsListResponse.to_json())

# convert the object into a dict
mobile_apps_list_response_dict = mobile_apps_list_response_instance.to_dict()
# create an instance of MobileAppsListResponse from a dict
mobile_apps_list_response_from_dict = MobileAppsListResponse.from_dict(mobile_apps_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


