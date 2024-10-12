# ExportRequest

Export database parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_login** | **str** | The name of the SQL administrator. | 
**administrator_login_password** | **str** | The password of the SQL administrator. | 
**authentication_type** | **str** | The authentication type. | [optional] [default to 'SQL']
**storage_key** | **str** | The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a \&quot;?.\&quot; | 
**storage_key_type** | **str** | The type of the storage key to use. | 
**storage_uri** | **str** | The storage uri to use. | 

## Example

```python
from openapi_client.models.export_request import ExportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportRequest from a JSON string
export_request_instance = ExportRequest.from_json(json)
# print the JSON string representation of the object
print(ExportRequest.to_json())

# convert the object into a dict
export_request_dict = export_request_instance.to_dict()
# create an instance of ExportRequest from a dict
export_request_from_dict = ExportRequest.from_dict(export_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


