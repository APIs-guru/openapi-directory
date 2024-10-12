# ImportRequest

Import database parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | The name of the database to import. | 
**edition** | **str** | The edition for the database being created.    The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the &#x60;Capabilities_ListByLocation&#x60; REST API or one of the following commands:    &#x60;&#x60;&#x60;azurecli  az sql db list-editions -l &lt;location&gt; -o table  &#x60;&#x60;&#x60;&#x60;    &#x60;&#x60;&#x60;powershell  Get-AzSqlServerServiceObjective -Location &lt;location&gt;  &#x60;&#x60;&#x60;&#x60;   | 
**max_size_bytes** | **str** | The maximum size for the newly imported database. | 
**service_objective_name** | **str** | The name of the service objective to assign to the database. | 
**administrator_login** | **str** | The name of the SQL administrator. | 
**administrator_login_password** | **str** | The password of the SQL administrator. | 
**authentication_type** | **str** | The authentication type. | [optional] [default to 'SQL']
**storage_key** | **str** | The storage key to use.  If storage key type is SharedAccessKey, it must be preceded with a \&quot;?.\&quot; | 
**storage_key_type** | **str** | The type of the storage key to use. | 
**storage_uri** | **str** | The storage uri to use. | 

## Example

```python
from openapi_client.models.import_request import ImportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportRequest from a JSON string
import_request_instance = ImportRequest.from_json(json)
# print the JSON string representation of the object
print(ImportRequest.to_json())

# convert the object into a dict
import_request_dict = import_request_instance.to_dict()
# create an instance of ImportRequest from a dict
import_request_from_dict = ImportRequest.from_dict(import_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


