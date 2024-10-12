# GetSsisObjectMetadataRequest

The request payload of get SSIS object metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_path** | **str** | Metadata path. | [optional] 

## Example

```python
from openapi_client.models.get_ssis_object_metadata_request import GetSsisObjectMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetSsisObjectMetadataRequest from a JSON string
get_ssis_object_metadata_request_instance = GetSsisObjectMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(GetSsisObjectMetadataRequest.to_json())

# convert the object into a dict
get_ssis_object_metadata_request_dict = get_ssis_object_metadata_request_instance.to_dict()
# create an instance of GetSsisObjectMetadataRequest from a dict
get_ssis_object_metadata_request_from_dict = GetSsisObjectMetadataRequest.from_dict(get_ssis_object_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


