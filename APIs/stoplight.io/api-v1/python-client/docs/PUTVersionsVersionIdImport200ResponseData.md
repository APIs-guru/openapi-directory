# PUTVersionsVersionIdImport200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_count** | **float** |  | 
**format** | **str** |  | 
**project_id** | **str** |  | 
**schema_count** | **float** |  | 
**test_count** | **float** |  | 
**text_section_count** | **float** |  | 
**trait_count** | **float** |  | 
**version_id** | **str** |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.put_versions_version_id_import200_response_data import PUTVersionsVersionIdImport200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of PUTVersionsVersionIdImport200ResponseData from a JSON string
put_versions_version_id_import200_response_data_instance = PUTVersionsVersionIdImport200ResponseData.from_json(json)
# print the JSON string representation of the object
print(PUTVersionsVersionIdImport200ResponseData.to_json())

# convert the object into a dict
put_versions_version_id_import200_response_data_dict = put_versions_version_id_import200_response_data_instance.to_dict()
# create an instance of PUTVersionsVersionIdImport200ResponseData from a dict
put_versions_version_id_import200_response_data_from_dict = PUTVersionsVersionIdImport200ResponseData.from_dict(put_versions_version_id_import200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


