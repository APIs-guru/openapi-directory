# ListInsuranceNetworksResponse

Response message for InsuranceNetworkService.ListInsuranceNetworks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networks** | [**List[InsuranceNetwork]**](InsuranceNetwork.md) | A list of insurance networks that are supported by Google. | [optional] 
**next_page_token** | **str** | If there are more insurance networks than the requested page size, then this field is populated with a token to fetch the next page of insurance networks on a subsequent call to ListInsuranceNetworks. | [optional] 

## Example

```python
from openapi_client.models.list_insurance_networks_response import ListInsuranceNetworksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInsuranceNetworksResponse from a JSON string
list_insurance_networks_response_instance = ListInsuranceNetworksResponse.from_json(json)
# print the JSON string representation of the object
print(ListInsuranceNetworksResponse.to_json())

# convert the object into a dict
list_insurance_networks_response_dict = list_insurance_networks_response_instance.to_dict()
# create an instance of ListInsuranceNetworksResponse from a dict
list_insurance_networks_response_from_dict = ListInsuranceNetworksResponse.from_dict(list_insurance_networks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


