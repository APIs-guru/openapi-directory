# InstallsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**install** | [**List[Install]**](Install.md) | An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app. | [optional] 

## Example

```python
from openapi_client.models.installs_list_response import InstallsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InstallsListResponse from a JSON string
installs_list_response_instance = InstallsListResponse.from_json(json)
# print the JSON string representation of the object
print(InstallsListResponse.to_json())

# convert the object into a dict
installs_list_response_dict = installs_list_response_instance.to_dict()
# create an instance of InstallsListResponse from a dict
installs_list_response_from_dict = InstallsListResponse.from_dict(installs_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


