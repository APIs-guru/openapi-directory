# MetadataDTO

Name - value pair of metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Metadata name. | 
**value** | **str** | Metadata value. | 

## Example

```python
from openapi_client.models.metadata_dto import MetadataDTO

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataDTO from a JSON string
metadata_dto_instance = MetadataDTO.from_json(json)
# print the JSON string representation of the object
print(MetadataDTO.to_json())

# convert the object into a dict
metadata_dto_dict = metadata_dto_instance.to_dict()
# create an instance of MetadataDTO from a dict
metadata_dto_from_dict = MetadataDTO.from_dict(metadata_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


