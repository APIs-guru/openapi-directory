# CustomMetadataData

Any custom metadata associated with the resource. i.e. A spanner instance can have multiple databases with its own unique metadata. Information for these individual databases can be captured in custom metadata data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_metadata** | [**List[DatabaseMetadata]**](DatabaseMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_metadata_data import CustomMetadataData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomMetadataData from a JSON string
custom_metadata_data_instance = CustomMetadataData.from_json(json)
# print the JSON string representation of the object
print(CustomMetadataData.to_json())

# convert the object into a dict
custom_metadata_data_dict = custom_metadata_data_instance.to_dict()
# create an instance of CustomMetadataData from a dict
custom_metadata_data_from_dict = CustomMetadataData.from_dict(custom_metadata_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


