# LodgingMetadata

Metadata for the Lodging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_time** | **str** | Required. The latest time at which the Lodging data is asserted to be true in the real world. This is not necessarily the time at which the request is made. | [optional] 

## Example

```python
from openapi_client.models.lodging_metadata import LodgingMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LodgingMetadata from a JSON string
lodging_metadata_instance = LodgingMetadata.from_json(json)
# print the JSON string representation of the object
print(LodgingMetadata.to_json())

# convert the object into a dict
lodging_metadata_dict = lodging_metadata_instance.to_dict()
# create an instance of LodgingMetadata from a dict
lodging_metadata_from_dict = LodgingMetadata.from_dict(lodging_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


