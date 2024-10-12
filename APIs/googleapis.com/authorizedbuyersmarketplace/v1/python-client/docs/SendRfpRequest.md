# SendRfpRequest

Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_contacts** | [**List[Contact]**](Contact.md) | Contact information for the buyer. | [optional] 
**client** | **str** | If the current buyer is sending the RFP on behalf of its client, use this field to specify the name of the client in the format: &#x60;buyers/{accountId}/clients/{clientAccountid}&#x60;. | [optional] 
**display_name** | **str** | Required. The display name of the proposal being created by this RFP. | [optional] 
**estimated_gross_spend** | [**Money**](Money.md) |  | [optional] 
**flight_end_time** | **str** | Required. Proposed flight end time of the RFP. A timestamp in RFC3339 UTC \&quot;Zulu\&quot; format. Note that the specified value will be truncated to a granularity of one second. | [optional] 
**flight_start_time** | **str** | Required. Proposed flight start time of the RFP. A timestamp in RFC3339 UTC \&quot;Zulu\&quot; format. Note that the specified value will be truncated to a granularity of one second. | [optional] 
**geo_targeting** | [**CriteriaTargeting**](CriteriaTargeting.md) |  | [optional] 
**inventory_size_targeting** | [**InventorySizeTargeting**](InventorySizeTargeting.md) |  | [optional] 
**note** | **str** | A message that is sent to the publisher. Maximum length is 1024 characters. | [optional] 
**preferred_deal_terms** | [**PreferredDealTerms**](PreferredDealTerms.md) |  | [optional] 
**programmatic_guaranteed_terms** | [**ProgrammaticGuaranteedTerms**](ProgrammaticGuaranteedTerms.md) |  | [optional] 
**publisher_profile** | **str** | Required. The profile of the publisher who will receive this RFP in the format: &#x60;buyers/{accountId}/publisherProfiles/{publisherProfileId}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.send_rfp_request import SendRfpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendRfpRequest from a JSON string
send_rfp_request_instance = SendRfpRequest.from_json(json)
# print the JSON string representation of the object
print(SendRfpRequest.to_json())

# convert the object into a dict
send_rfp_request_dict = send_rfp_request_instance.to_dict()
# create an instance of SendRfpRequest from a dict
send_rfp_request_from_dict = SendRfpRequest.from_dict(send_rfp_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


