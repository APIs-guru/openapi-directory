# UpdateDeveloperMetadataRequest

A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filters** | [**List[DataFilter]**](DataFilter.md) | The filters matching the developer metadata entries to update. | [optional] 
**developer_metadata** | [**DeveloperMetadata**](DeveloperMetadata.md) |  | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;developerMetadata&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 

## Example

```python
from openapi_client.models.update_developer_metadata_request import UpdateDeveloperMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeveloperMetadataRequest from a JSON string
update_developer_metadata_request_instance = UpdateDeveloperMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeveloperMetadataRequest.to_json())

# convert the object into a dict
update_developer_metadata_request_dict = update_developer_metadata_request_instance.to_dict()
# create an instance of UpdateDeveloperMetadataRequest from a dict
update_developer_metadata_request_from_dict = UpdateDeveloperMetadataRequest.from_dict(update_developer_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


