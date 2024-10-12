# MultiRegionMetadata

The metadata for the multi-region that includes the constituent regions. The metadata is only populated if the region is multi-region. For single region, it will be empty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constituent_regions** | **List[str]** | The regions constituting the multi-region. | [optional] 

## Example

```python
from openapi_client.models.multi_region_metadata import MultiRegionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MultiRegionMetadata from a JSON string
multi_region_metadata_instance = MultiRegionMetadata.from_json(json)
# print the JSON string representation of the object
print(MultiRegionMetadata.to_json())

# convert the object into a dict
multi_region_metadata_dict = multi_region_metadata_instance.to_dict()
# create an instance of MultiRegionMetadata from a dict
multi_region_metadata_from_dict = MultiRegionMetadata.from_dict(multi_region_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


