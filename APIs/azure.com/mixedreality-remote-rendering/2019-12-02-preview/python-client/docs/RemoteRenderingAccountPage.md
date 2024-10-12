# RemoteRenderingAccountPage

Result of the request to get resource collection. It contains a list of resources and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of resource list results if there are any. | [optional] 
**value** | [**List[RemoteRenderingAccount]**](RemoteRenderingAccount.md) | List of resources supported by the Resource Provider. | [optional] 

## Example

```python
from openapi_client.models.remote_rendering_account_page import RemoteRenderingAccountPage

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteRenderingAccountPage from a JSON string
remote_rendering_account_page_instance = RemoteRenderingAccountPage.from_json(json)
# print the JSON string representation of the object
print(RemoteRenderingAccountPage.to_json())

# convert the object into a dict
remote_rendering_account_page_dict = remote_rendering_account_page_instance.to_dict()
# create an instance of RemoteRenderingAccountPage from a dict
remote_rendering_account_page_from_dict = RemoteRenderingAccountPage.from_dict(remote_rendering_account_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


