# ExportUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**task_id** | **str** |  | 

## Example

```python
from openapi_client.models.export_users_response import ExportUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExportUsersResponse from a JSON string
export_users_response_instance = ExportUsersResponse.from_json(json)
# print the JSON string representation of the object
print(ExportUsersResponse.to_json())

# convert the object into a dict
export_users_response_dict = export_users_response_instance.to_dict()
# create an instance of ExportUsersResponse from a dict
export_users_response_from_dict = ExportUsersResponse.from_dict(export_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


