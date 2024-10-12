# RemoteLoginInformationListResult

Values returned by the List operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token. | [optional] 
**value** | [**List[RemoteLoginInformation]**](RemoteLoginInformation.md) | The collection of returned remote login details. | [optional] 

## Example

```python
from openapi_client.models.remote_login_information_list_result import RemoteLoginInformationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteLoginInformationListResult from a JSON string
remote_login_information_list_result_instance = RemoteLoginInformationListResult.from_json(json)
# print the JSON string representation of the object
print(RemoteLoginInformationListResult.to_json())

# convert the object into a dict
remote_login_information_list_result_dict = remote_login_information_list_result_instance.to_dict()
# create an instance of RemoteLoginInformationListResult from a dict
remote_login_information_list_result_from_dict = RemoteLoginInformationListResult.from_dict(remote_login_information_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


