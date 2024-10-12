# Metadata

A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finger_print** | **str** | The fingerprint of the metadata. Required for updating the metadata entries for this instance. | [optional] 
**items** | [**List[MetadataItem]**](MetadataItem.md) | A list of metadata items. | [optional] 

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


