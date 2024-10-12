# BillingAggregatedInformationGetAll200Response

Aggregated Billing Information for a user an the organizations in which the user is an admin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_billings** | [**BillingAggregatedInformationGetByApp200Response**](BillingAggregatedInformationGetByApp200Response.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_aggregated_information_get_all200_response import BillingAggregatedInformationGetAll200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetAll200Response from a JSON string
billing_aggregated_information_get_all200_response_instance = BillingAggregatedInformationGetAll200Response.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetAll200Response.to_json())

# convert the object into a dict
billing_aggregated_information_get_all200_response_dict = billing_aggregated_information_get_all200_response_instance.to_dict()
# create an instance of BillingAggregatedInformationGetAll200Response from a dict
billing_aggregated_information_get_all200_response_from_dict = BillingAggregatedInformationGetAll200Response.from_dict(billing_aggregated_information_get_all200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


