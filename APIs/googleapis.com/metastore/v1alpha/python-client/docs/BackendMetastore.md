# BackendMetastore

Represents a backend metastore for the federation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metastore_type** | **str** | The type of the backend metastore. | [optional] 
**name** | **str** | The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: BigQuery projects/{project_id} Dataproc Metastore projects/{project_id}/locations/{location}/services/{service_id} | [optional] 

## Example

```python
from openapi_client.models.backend_metastore import BackendMetastore

# TODO update the JSON string below
json = "{}"
# create an instance of BackendMetastore from a JSON string
backend_metastore_instance = BackendMetastore.from_json(json)
# print the JSON string representation of the object
print(BackendMetastore.to_json())

# convert the object into a dict
backend_metastore_dict = backend_metastore_instance.to_dict()
# create an instance of BackendMetastore from a dict
backend_metastore_from_dict = BackendMetastore.from_dict(backend_metastore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


