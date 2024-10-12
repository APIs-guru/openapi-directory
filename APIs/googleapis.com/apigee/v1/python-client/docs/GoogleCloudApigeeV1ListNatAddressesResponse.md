# GoogleCloudApigeeV1ListNatAddressesResponse

Response for ListNatAddresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nat_addresses** | [**List[GoogleCloudApigeeV1NatAddress]**](GoogleCloudApigeeV1NatAddress.md) | List of NAT Addresses for the instance. | [optional] 
**next_page_token** | **str** | Page token that you can include in a ListNatAddresses request to retrieve the next page of content. If omitted, no subsequent pages exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_nat_addresses_response import GoogleCloudApigeeV1ListNatAddressesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListNatAddressesResponse from a JSON string
google_cloud_apigee_v1_list_nat_addresses_response_instance = GoogleCloudApigeeV1ListNatAddressesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListNatAddressesResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_nat_addresses_response_dict = google_cloud_apigee_v1_list_nat_addresses_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListNatAddressesResponse from a dict
google_cloud_apigee_v1_list_nat_addresses_response_from_dict = GoogleCloudApigeeV1ListNatAddressesResponse.from_dict(google_cloud_apigee_v1_list_nat_addresses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


