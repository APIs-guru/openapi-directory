# UpdateMetadataDTO

PATCH Body schema to represent list of Metadata to be updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add** | [**List[MetadataDTO]**](MetadataDTO.md) | List of metadata associated with answer to be added | [optional] 
**delete** | [**List[MetadataDTO]**](MetadataDTO.md) | List of Metadata associated with answer to be deleted | [optional] 

## Example

```python
from openapi_client.models.update_metadata_dto import UpdateMetadataDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMetadataDTO from a JSON string
update_metadata_dto_instance = UpdateMetadataDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateMetadataDTO.to_json())

# convert the object into a dict
update_metadata_dto_dict = update_metadata_dto_instance.to_dict()
# create an instance of UpdateMetadataDTO from a dict
update_metadata_dto_from_dict = UpdateMetadataDTO.from_dict(update_metadata_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


