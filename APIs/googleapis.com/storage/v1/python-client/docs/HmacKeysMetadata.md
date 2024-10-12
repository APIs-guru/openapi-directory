# HmacKeysMetadata

A list of hmacKeys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[HmacKeyMetadata]**](HmacKeyMetadata.md) | The list of items. | [optional] 
**kind** | **str** | The kind of item this is. For lists of hmacKeys, this is always storage#hmacKeysMetadata. | [optional] [default to 'storage#hmacKeysMetadata']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.hmac_keys_metadata import HmacKeysMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of HmacKeysMetadata from a JSON string
hmac_keys_metadata_instance = HmacKeysMetadata.from_json(json)
# print the JSON string representation of the object
print(HmacKeysMetadata.to_json())

# convert the object into a dict
hmac_keys_metadata_dict = hmac_keys_metadata_instance.to_dict()
# create an instance of HmacKeysMetadata from a dict
hmac_keys_metadata_from_dict = HmacKeysMetadata.from_dict(hmac_keys_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


