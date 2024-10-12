# ConnectionImportData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ConnectionImportDataCredentials**](ConnectionImportDataCredentials.md) |  | [optional] 
**metadata** | **Dict[str, object]** | Attach your own consumer specific metadata | [optional] 
**settings** | **object** | Connection settings. Values will persist to &#x60;form_fields&#x60; with corresponding id | [optional] 

## Example

```python
from openapi_client.models.connection_import_data import ConnectionImportData

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionImportData from a JSON string
connection_import_data_instance = ConnectionImportData.from_json(json)
# print the JSON string representation of the object
print(ConnectionImportData.to_json())

# convert the object into a dict
connection_import_data_dict = connection_import_data_instance.to_dict()
# create an instance of ConnectionImportData from a dict
connection_import_data_from_dict = ConnectionImportData.from_dict(connection_import_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


