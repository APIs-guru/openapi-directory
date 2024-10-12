# GDPRPurgeVerifyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | indicate whether GDPR purge operation succeeds or not | 

## Example

```python
from openapi_client.models.gdpr_purge_verify_response import GDPRPurgeVerifyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GDPRPurgeVerifyResponse from a JSON string
gdpr_purge_verify_response_instance = GDPRPurgeVerifyResponse.from_json(json)
# print the JSON string representation of the object
print(GDPRPurgeVerifyResponse.to_json())

# convert the object into a dict
gdpr_purge_verify_response_dict = gdpr_purge_verify_response_instance.to_dict()
# create an instance of GDPRPurgeVerifyResponse from a dict
gdpr_purge_verify_response_from_dict = GDPRPurgeVerifyResponse.from_dict(gdpr_purge_verify_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


