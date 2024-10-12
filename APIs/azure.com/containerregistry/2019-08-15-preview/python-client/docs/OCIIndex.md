# OCIIndex

Returns the requested OCI index file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**Annotations**](Annotations.md) |  | [optional] 
**manifests** | [**List[ManifestListAttributes]**](ManifestListAttributes.md) | List of OCI image layer information | [optional] 
**schema_version** | **int** | Schema version | [optional] 

## Example

```python
from openapi_client.models.oci_index import OCIIndex

# TODO update the JSON string below
json = "{}"
# create an instance of OCIIndex from a JSON string
oci_index_instance = OCIIndex.from_json(json)
# print the JSON string representation of the object
print(OCIIndex.to_json())

# convert the object into a dict
oci_index_dict = oci_index_instance.to_dict()
# create an instance of OCIIndex from a dict
oci_index_from_dict = OCIIndex.from_dict(oci_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


