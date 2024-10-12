# PUTVersionsVersionIdImportRequestOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remove_extra_endpoints** | **bool** | Default: false. | [optional] [default to False]
**remove_extra_schemas** | **bool** | Default: false. | [optional] [default to False]
**remove_extra_text_sections** | **bool** | Default: false. | [optional] [default to False]
**remove_extra_traits** | **bool** | Default: false. | [optional] [default to False]

## Example

```python
from openapi_client.models.put_versions_version_id_import_request_options import PUTVersionsVersionIdImportRequestOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PUTVersionsVersionIdImportRequestOptions from a JSON string
put_versions_version_id_import_request_options_instance = PUTVersionsVersionIdImportRequestOptions.from_json(json)
# print the JSON string representation of the object
print(PUTVersionsVersionIdImportRequestOptions.to_json())

# convert the object into a dict
put_versions_version_id_import_request_options_dict = put_versions_version_id_import_request_options_instance.to_dict()
# create an instance of PUTVersionsVersionIdImportRequestOptions from a dict
put_versions_version_id_import_request_options_from_dict = PUTVersionsVersionIdImportRequestOptions.from_dict(put_versions_version_id_import_request_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


