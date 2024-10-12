# LocationMetadata

Location metadata information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geography_group** | **str** | The geography group of the location. | [optional] [readonly] 
**latitude** | **str** | The latitude of the location. | [optional] [readonly] 
**longitude** | **str** | The longitude of the location. | [optional] [readonly] 
**paired_region** | [**List[PairedRegion]**](PairedRegion.md) | The regions paired to this region. | [optional] 
**physical_location** | **str** | The physical location of the Azure location. | [optional] [readonly] 
**region_category** | **str** | The category of the region. | [optional] [readonly] 
**region_type** | **str** | The type of the region. | [optional] [readonly] 

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


