# GDPRPurgeVerifyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | deployment id | 
**key** | **str** | deployment key | 

## Example

```python
from openapi_client.models.gdpr_purge_verify_request import GDPRPurgeVerifyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GDPRPurgeVerifyRequest from a JSON string
gdpr_purge_verify_request_instance = GDPRPurgeVerifyRequest.from_json(json)
# print the JSON string representation of the object
print(GDPRPurgeVerifyRequest.to_json())

# convert the object into a dict
gdpr_purge_verify_request_dict = gdpr_purge_verify_request_instance.to_dict()
# create an instance of GDPRPurgeVerifyRequest from a dict
gdpr_purge_verify_request_from_dict = GDPRPurgeVerifyRequest.from_dict(gdpr_purge_verify_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


