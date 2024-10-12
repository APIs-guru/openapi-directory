# HasTestflightMetadataResponse

The response for the testflight metadata check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_testflight_metadata** | **bool** | true if the app has the testflight metadata, false otherwise | [optional] 

## Example

```python
from openapi_client.models.has_testflight_metadata_response import HasTestflightMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HasTestflightMetadataResponse from a JSON string
has_testflight_metadata_response_instance = HasTestflightMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(HasTestflightMetadataResponse.to_json())

# convert the object into a dict
has_testflight_metadata_response_dict = has_testflight_metadata_response_instance.to_dict()
# create an instance of HasTestflightMetadataResponse from a dict
has_testflight_metadata_response_from_dict = HasTestflightMetadataResponse.from_dict(has_testflight_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


