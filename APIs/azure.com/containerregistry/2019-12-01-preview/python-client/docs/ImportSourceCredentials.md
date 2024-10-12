# ImportSourceCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password used to authenticate with the source registry. | 
**username** | **str** | The username to authenticate with the source registry. | [optional] 

## Example

```python
from openapi_client.models.import_source_credentials import ImportSourceCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of ImportSourceCredentials from a JSON string
import_source_credentials_instance = ImportSourceCredentials.from_json(json)
# print the JSON string representation of the object
print(ImportSourceCredentials.to_json())

# convert the object into a dict
import_source_credentials_dict = import_source_credentials_instance.to_dict()
# create an instance of ImportSourceCredentials from a dict
import_source_credentials_from_dict = ImportSourceCredentials.from_dict(import_source_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


