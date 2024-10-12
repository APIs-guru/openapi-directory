# HmacKeyMetadata

JSON template to produce a JSON-style HMAC Key metadata resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_id** | **str** | The ID of the HMAC Key. | [optional] 
**etag** | **str** | HTTP 1.1 Entity tag for the HMAC key. | [optional] 
**id** | **str** | The ID of the HMAC key, including the Project ID and the Access ID. | [optional] 
**kind** | **str** | The kind of item this is. For HMAC Key metadata, this is always storage#hmacKeyMetadata. | [optional] [default to 'storage#hmacKeyMetadata']
**project_id** | **str** | Project ID owning the service account to which the key authenticates. | [optional] 
**self_link** | **str** | The link to this resource. | [optional] 
**service_account_email** | **str** | The email address of the key&#39;s associated service account. | [optional] 
**state** | **str** | The state of the key. Can be one of ACTIVE, INACTIVE, or DELETED. | [optional] 
**time_created** | **datetime** | The creation time of the HMAC key in RFC 3339 format. | [optional] 
**updated** | **datetime** | The last modification time of the HMAC key metadata in RFC 3339 format. | [optional] 

## Example

```python
from openapi_client.models.hmac_key_metadata import HmacKeyMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of HmacKeyMetadata from a JSON string
hmac_key_metadata_instance = HmacKeyMetadata.from_json(json)
# print the JSON string representation of the object
print(HmacKeyMetadata.to_json())

# convert the object into a dict
hmac_key_metadata_dict = hmac_key_metadata_instance.to_dict()
# create an instance of HmacKeyMetadata from a dict
hmac_key_metadata_from_dict = HmacKeyMetadata.from_dict(hmac_key_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


