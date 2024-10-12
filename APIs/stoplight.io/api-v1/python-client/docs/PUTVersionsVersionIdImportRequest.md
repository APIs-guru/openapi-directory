# PUTVersionsVersionIdImportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**PUTVersionsVersionIdImportRequestOptions**](PUTVersionsVersionIdImportRequestOptions.md) |  | [optional] 
**spec_data** | [**POSTVersionsPublishAnonRequestSpecData**](POSTVersionsPublishAnonRequestSpecData.md) |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.put_versions_version_id_import_request import PUTVersionsVersionIdImportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PUTVersionsVersionIdImportRequest from a JSON string
put_versions_version_id_import_request_instance = PUTVersionsVersionIdImportRequest.from_json(json)
# print the JSON string representation of the object
print(PUTVersionsVersionIdImportRequest.to_json())

# convert the object into a dict
put_versions_version_id_import_request_dict = put_versions_version_id_import_request_instance.to_dict()
# create an instance of PUTVersionsVersionIdImportRequest from a dict
put_versions_version_id_import_request_from_dict = PUTVersionsVersionIdImportRequest.from_dict(put_versions_version_id_import_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


