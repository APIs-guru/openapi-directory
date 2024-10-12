# S3CompatibleMetadata

S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_method** | **str** | Specifies the authentication and authorization method used by the storage service. When not specified, Transfer Service will attempt to determine right auth method to use. | [optional] 
**list_api** | **str** | The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine the right API to use. | [optional] 
**protocol** | **str** | Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used. | [optional] 
**request_model** | **str** | Specifies the API request model used to call the storage service. When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used. | [optional] 

## Example

```python
from openapi_client.models.s3_compatible_metadata import S3CompatibleMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of S3CompatibleMetadata from a JSON string
s3_compatible_metadata_instance = S3CompatibleMetadata.from_json(json)
# print the JSON string representation of the object
print(S3CompatibleMetadata.to_json())

# convert the object into a dict
s3_compatible_metadata_dict = s3_compatible_metadata_instance.to_dict()
# create an instance of S3CompatibleMetadata from a dict
s3_compatible_metadata_from_dict = S3CompatibleMetadata.from_dict(s3_compatible_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


