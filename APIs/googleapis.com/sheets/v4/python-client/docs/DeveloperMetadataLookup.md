# DeveloperMetadataLookup

Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_matching_strategy** | **str** | Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this field is specified, a metadataLocation must also be specified. | [optional] 
**location_type** | **str** | Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet location: spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the locationMatchingStrategy is specified as EXACT. | [optional] 
**metadata_id** | **int** | Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id. | [optional] 
**metadata_key** | **str** | Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key. | [optional] 
**metadata_location** | [**DeveloperMetadataLocation**](DeveloperMetadataLocation.md) |  | [optional] 
**metadata_value** | **str** | Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value. | [optional] 
**visibility** | **str** | Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visibile to the requesting project is considered. | [optional] 

## Example

```python
from openapi_client.models.developer_metadata_lookup import DeveloperMetadataLookup

# TODO update the JSON string below
json = "{}"
# create an instance of DeveloperMetadataLookup from a JSON string
developer_metadata_lookup_instance = DeveloperMetadataLookup.from_json(json)
# print the JSON string representation of the object
print(DeveloperMetadataLookup.to_json())

# convert the object into a dict
developer_metadata_lookup_dict = developer_metadata_lookup_instance.to_dict()
# create an instance of DeveloperMetadataLookup from a dict
developer_metadata_lookup_from_dict = DeveloperMetadataLookup.from_dict(developer_metadata_lookup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


