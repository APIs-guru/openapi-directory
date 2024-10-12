# MobileCarriersListResponse

Mobile Carrier List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#mobileCarriersListResponse\&quot;. | [optional] 
**mobile_carriers** | [**List[MobileCarrier]**](MobileCarrier.md) | Mobile carrier collection. | [optional] 

## Example

```python
from openapi_client.models.mobile_carriers_list_response import MobileCarriersListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MobileCarriersListResponse from a JSON string
mobile_carriers_list_response_instance = MobileCarriersListResponse.from_json(json)
# print the JSON string representation of the object
print(MobileCarriersListResponse.to_json())

# convert the object into a dict
mobile_carriers_list_response_dict = mobile_carriers_list_response_instance.to_dict()
# create an instance of MobileCarriersListResponse from a dict
mobile_carriers_list_response_from_dict = MobileCarriersListResponse.from_dict(mobile_carriers_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


