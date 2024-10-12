# LocationMetadata

Cloud KMS metadata for the given google.cloud.location.Location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ekm_available** | **bool** | Indicates whether CryptoKeys with protection_level EXTERNAL can be created in this location. | [optional] 
**hsm_available** | **bool** | Indicates whether CryptoKeys with protection_level HSM can be created in this location. | [optional] 

## Example

```python
from openapi_client.models.location_metadata import LocationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LocationMetadata from a JSON string
location_metadata_instance = LocationMetadata.from_json(json)
# print the JSON string representation of the object
print(LocationMetadata.to_json())

# convert the object into a dict
location_metadata_dict = location_metadata_instance.to_dict()
# create an instance of LocationMetadata from a dict
location_metadata_from_dict = LocationMetadata.from_dict(location_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


