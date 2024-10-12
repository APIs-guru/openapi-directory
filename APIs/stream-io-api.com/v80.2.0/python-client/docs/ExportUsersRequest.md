# ExportUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_ids** | **List[str]** |  | 

## Example

```python
from openapi_client.models.export_users_request import ExportUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportUsersRequest from a JSON string
export_users_request_instance = ExportUsersRequest.from_json(json)
# print the JSON string representation of the object
print(ExportUsersRequest.to_json())

# convert the object into a dict
export_users_request_dict = export_users_request_instance.to_dict()
# create an instance of ExportUsersRequest from a dict
export_users_request_from_dict = ExportUsersRequest.from_dict(export_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


