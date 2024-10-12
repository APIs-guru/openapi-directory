# Metadata

Metadata of a matched search result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The creation time for this document or object in the search result. | [optional] 
**display_options** | [**ResultDisplayMetadata**](ResultDisplayMetadata.md) |  | [optional] 
**fields** | [**List[NamedProperty]**](NamedProperty.md) | Indexed fields in structured data, returned as a generic named property. | [optional] 
**mime_type** | **str** | Mime type of the search result. | [optional] 
**object_type** | **str** | Object type of the search result. | [optional] 
**owner** | [**Person**](Person.md) |  | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**thumbnail_url** | **str** | The thumbnail URL of the result. | [optional] 
**update_time** | **str** | The last modified date for the object in the search result. If not set in the item, the value returned here is empty. When &#x60;updateTime&#x60; is used for calculating freshness and is not set, this value defaults to 2 years from the current time. | [optional] 

## Example

```python
from openapi_client.models.metadata import Metadata

# TODO update the JSON string below
json = "{}"
# create an instance of Metadata from a JSON string
metadata_instance = Metadata.from_json(json)
# print the JSON string representation of the object
print(Metadata.to_json())

# convert the object into a dict
metadata_dict = metadata_instance.to_dict()
# create an instance of Metadata from a dict
metadata_from_dict = Metadata.from_dict(metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


