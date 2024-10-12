# SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**state** | **str** | [Output Only] Status of the action, which can be one of the following: &#x60;PROPAGATING&#x60;, &#x60;PROPAGATED&#x60;, &#x60;ABANDONED&#x60;, &#x60;FAILED&#x60;, or &#x60;DONE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.set_common_instance_metadata_operation_metadata_per_location_operation_info import SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo from a JSON string
set_common_instance_metadata_operation_metadata_per_location_operation_info_instance = SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo.from_json(json)
# print the JSON string representation of the object
print(SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo.to_json())

# convert the object into a dict
set_common_instance_metadata_operation_metadata_per_location_operation_info_dict = set_common_instance_metadata_operation_metadata_per_location_operation_info_instance.to_dict()
# create an instance of SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo from a dict
set_common_instance_metadata_operation_metadata_per_location_operation_info_from_dict = SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo.from_dict(set_common_instance_metadata_operation_metadata_per_location_operation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


