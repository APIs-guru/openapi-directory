# ApiMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** |  | 
**default_version** | **str** |  | [optional] 
**links** | [**List[ApiMetadataLink]**](ApiMetadataLink.md) |  | 
**tags** | **List[str]** |  | 

## Example

```python
from openapi_client.models.api_metadata import ApiMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ApiMetadata from a JSON string
api_metadata_instance = ApiMetadata.from_json(json)
# print the JSON string representation of the object
print(ApiMetadata.to_json())

# convert the object into a dict
api_metadata_dict = api_metadata_instance.to_dict()
# create an instance of ApiMetadata from a dict
api_metadata_from_dict = ApiMetadata.from_dict(api_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


