# LocationMetadata

Metadata about the service in a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multi_region_metadata** | [**MultiRegionMetadata**](MultiRegionMetadata.md) |  | [optional] 
**supported_hive_metastore_versions** | [**List[HiveMetastoreVersion]**](HiveMetastoreVersion.md) | The versions of Hive Metastore that can be used when creating a new metastore service in this location. The server guarantees that exactly one HiveMetastoreVersion in the list will set is_default. | [optional] 

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


