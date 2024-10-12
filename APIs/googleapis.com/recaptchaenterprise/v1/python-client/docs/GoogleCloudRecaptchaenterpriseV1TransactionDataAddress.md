# GoogleCloudRecaptchaenterpriseV1TransactionDataAddress

Structured address format for billing and shipping addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **List[str]** | Optional. The first lines of the address. The first line generally contains the street name and number, and further lines may include information such as an apartment number. | [optional] 
**administrative_area** | **str** | Optional. The state, province, or otherwise administrative area of the address. | [optional] 
**locality** | **str** | Optional. The town/city of the address. | [optional] 
**postal_code** | **str** | Optional. The postal or ZIP code of the address. | [optional] 
**recipient** | **str** | Optional. The recipient name, potentially including information such as \&quot;care of\&quot;. | [optional] 
**region_code** | **str** | Optional. The CLDR country/region of the address. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_transaction_data_address import GoogleCloudRecaptchaenterpriseV1TransactionDataAddress

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionDataAddress from a JSON string
google_cloud_recaptchaenterprise_v1_transaction_data_address_instance = GoogleCloudRecaptchaenterpriseV1TransactionDataAddress.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1TransactionDataAddress.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_transaction_data_address_dict = google_cloud_recaptchaenterprise_v1_transaction_data_address_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionDataAddress from a dict
google_cloud_recaptchaenterprise_v1_transaction_data_address_from_dict = GoogleCloudRecaptchaenterpriseV1TransactionDataAddress.from_dict(google_cloud_recaptchaenterprise_v1_transaction_data_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


