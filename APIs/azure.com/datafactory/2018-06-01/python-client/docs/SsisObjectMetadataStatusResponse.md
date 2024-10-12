# SsisObjectMetadataStatusResponse

The status of the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | The operation error message. | [optional] 
**name** | **str** | The operation name. | [optional] 
**properties** | **str** | The operation properties. | [optional] 
**status** | **str** | The status of the operation. | [optional] 

## Example

```python
from openapi_client.models.ssis_object_metadata_status_response import SsisObjectMetadataStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SsisObjectMetadataStatusResponse from a JSON string
ssis_object_metadata_status_response_instance = SsisObjectMetadataStatusResponse.from_json(json)
# print the JSON string representation of the object
print(SsisObjectMetadataStatusResponse.to_json())

# convert the object into a dict
ssis_object_metadata_status_response_dict = ssis_object_metadata_status_response_instance.to_dict()
# create an instance of SsisObjectMetadataStatusResponse from a dict
ssis_object_metadata_status_response_from_dict = SsisObjectMetadataStatusResponse.from_dict(ssis_object_metadata_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


