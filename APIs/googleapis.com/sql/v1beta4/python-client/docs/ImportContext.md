# ImportContext

Database instance import context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bak_import_options** | [**ImportContextBakImportOptions**](ImportContextBakImportOptions.md) |  | [optional] 
**csv_import_options** | [**ImportContextCsvImportOptions**](ImportContextCsvImportOptions.md) |  | [optional] 
**database** | **str** | The target database for the import. If &#x60;fileType&#x60; is &#x60;SQL&#x60;, this field is required only if the import file does not specify a database, and is overridden by any database specification in the import file. If &#x60;fileType&#x60; is &#x60;CSV&#x60;, one database must be specified. | [optional] 
**file_type** | **str** | The file type for the specified uri. * &#x60;SQL&#x60;: The file contains SQL statements. * &#x60;CSV&#x60;: The file contains CSV data. * &#x60;BAK&#x60;: The file contains backup data for a SQL Server instance. | [optional] 
**import_user** | **str** | The PostgreSQL user for this import operation. PostgreSQL instances only. | [optional] 
**kind** | **str** | This is always &#x60;sql#importContext&#x60;. | [optional] 
**uri** | **str** | Path to the import file in Cloud Storage, in the form &#x60;gs://bucketName/fileName&#x60;. Compressed gzip files (.gz) are supported when &#x60;fileType&#x60; is &#x60;SQL&#x60;. The instance must have write permissions to the bucket and read access to the file. | [optional] 

## Example

```python
from openapi_client.models.import_context import ImportContext

# TODO update the JSON string below
json = "{}"
# create an instance of ImportContext from a JSON string
import_context_instance = ImportContext.from_json(json)
# print the JSON string representation of the object
print(ImportContext.to_json())

# convert the object into a dict
import_context_dict = import_context_instance.to_dict()
# create an instance of ImportContext from a dict
import_context_from_dict = ImportContext.from_dict(import_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


