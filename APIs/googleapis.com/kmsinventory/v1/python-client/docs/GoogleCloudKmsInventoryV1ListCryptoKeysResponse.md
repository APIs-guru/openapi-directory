# GoogleCloudKmsInventoryV1ListCryptoKeysResponse

Response message for KeyDashboardService.ListCryptoKeys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crypto_keys** | [**List[GoogleCloudKmsV1CryptoKey]**](GoogleCloudKmsV1CryptoKey.md) | The list of CryptoKeys. | [optional] 
**next_page_token** | **str** | The page token returned from the previous response if the next page is desired. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_kms_inventory_v1_list_crypto_keys_response import GoogleCloudKmsInventoryV1ListCryptoKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsInventoryV1ListCryptoKeysResponse from a JSON string
google_cloud_kms_inventory_v1_list_crypto_keys_response_instance = GoogleCloudKmsInventoryV1ListCryptoKeysResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsInventoryV1ListCryptoKeysResponse.to_json())

# convert the object into a dict
google_cloud_kms_inventory_v1_list_crypto_keys_response_dict = google_cloud_kms_inventory_v1_list_crypto_keys_response_instance.to_dict()
# create an instance of GoogleCloudKmsInventoryV1ListCryptoKeysResponse from a dict
google_cloud_kms_inventory_v1_list_crypto_keys_response_from_dict = GoogleCloudKmsInventoryV1ListCryptoKeysResponse.from_dict(google_cloud_kms_inventory_v1_list_crypto_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


