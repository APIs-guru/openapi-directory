# MatchedDeveloperMetadata

A developer metadata entry and the data filters specified in the original request that matched it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filters** | [**List[DataFilter]**](DataFilter.md) | All filters matching the returned developer metadata. | [optional] 
**developer_metadata** | [**DeveloperMetadata**](DeveloperMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.matched_developer_metadata import MatchedDeveloperMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MatchedDeveloperMetadata from a JSON string
matched_developer_metadata_instance = MatchedDeveloperMetadata.from_json(json)
# print the JSON string representation of the object
print(MatchedDeveloperMetadata.to_json())

# convert the object into a dict
matched_developer_metadata_dict = matched_developer_metadata_instance.to_dict()
# create an instance of MatchedDeveloperMetadata from a dict
matched_developer_metadata_from_dict = MatchedDeveloperMetadata.from_dict(matched_developer_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


