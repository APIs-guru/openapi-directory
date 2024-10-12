# SetCommonInstanceMetadataOperationMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_operation_id** | **str** | [Output Only] The client operation id. | [optional] 
**per_location_operations** | [**Dict[str, SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo]**](SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo.md) | [Output Only] Status information per location (location name is key). Example key: zones/us-central1-a | [optional] 

## Example

```python
from openapi_client.models.set_common_instance_metadata_operation_metadata import SetCommonInstanceMetadataOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SetCommonInstanceMetadataOperationMetadata from a JSON string
set_common_instance_metadata_operation_metadata_instance = SetCommonInstanceMetadataOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(SetCommonInstanceMetadataOperationMetadata.to_json())

# convert the object into a dict
set_common_instance_metadata_operation_metadata_dict = set_common_instance_metadata_operation_metadata_instance.to_dict()
# create an instance of SetCommonInstanceMetadataOperationMetadata from a dict
set_common_instance_metadata_operation_metadata_from_dict = SetCommonInstanceMetadataOperationMetadata.from_dict(set_common_instance_metadata_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


