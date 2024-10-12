# ListAppRecoveriesResponse

Response message for ListAppRecoveries. -- api-linter: core::0158::response-next-page-token-field=disabled

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_actions** | [**List[AppRecoveryAction]**](AppRecoveryAction.md) | List of recovery actions associated with the requested package name. | [optional] 

## Example

```python
from openapi_client.models.list_app_recoveries_response import ListAppRecoveriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAppRecoveriesResponse from a JSON string
list_app_recoveries_response_instance = ListAppRecoveriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAppRecoveriesResponse.to_json())

# convert the object into a dict
list_app_recoveries_response_dict = list_app_recoveries_response_instance.to_dict()
# create an instance of ListAppRecoveriesResponse from a dict
list_app_recoveries_response_from_dict = ListAppRecoveriesResponse.from_dict(list_app_recoveries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


