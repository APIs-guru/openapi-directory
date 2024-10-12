# Sender119

Sender information is required for non-tokenized transactions. If a pan number is provided directly, the sender information should be provided. Details- Conditional

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_merchant_data** | [**AdditionalMerchantData121**](AdditionalMerchantData121.md) |  | [optional] 
**address** | [**Address120**](Address120.md) |  | [optional] 
**date_of_birth** | **str** | The consumer&#39;s date of birth as an ISO 8601 Full Date. Valid Values- Refer &#39;Date And Time Formats&#39; | [optional] 
**email** | **str** | Sender&#39;s email address. Phone number or Email should be provided if the partner is set up to receive notifications. Details- Conditional | [optional] 
**first_name** | **str** | Sender’s first name. Details- alpha, 1-40 | 
**government_ids** | [**GovernmentIds122**](GovernmentIds122.md) |  | [optional] 
**last_name** | **str** | Sender’s last name. Details- alpha, 1-40 | 
**middle_name** | **str** | Middle name of the sender. Details- alpha, 40 | [optional] 
**nationality** | **str** | The senders home country as an ISO 3166-1 alpha-3 country code, In uppercase. Details- alpha, 3 | [optional] 
**phone** | **str** | Sender&#39;s phone number, including country code. Phone number or Email should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15 | [optional] 

## Example

```python
from openapi_client.models.sender119 import Sender119

# TODO update the JSON string below
json = "{}"
# create an instance of Sender119 from a JSON string
sender119_instance = Sender119.from_json(json)
# print the JSON string representation of the object
print(Sender119.to_json())

# convert the object into a dict
sender119_dict = sender119_instance.to_dict()
# create an instance of Sender119 from a dict
sender119_from_dict = Sender119.from_dict(sender119_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


