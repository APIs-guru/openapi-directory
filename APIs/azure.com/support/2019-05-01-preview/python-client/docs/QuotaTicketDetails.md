# QuotaTicketDetails

Additional set of information required for quota increase support ticket for certain quota types, e.g.: Virtual machine cores. Get complete details about Quota payload support request along with examples at <a target='' href='https://aka.ms/supportrpquotarequestpayload'>Support quota request</a>.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quota_change_request_sub_type** | **str** | Required for certain quota types when there is a sub type that you are requesting quota increase for. Example: Batch | [optional] 
**quota_change_request_version** | **str** | Quota change request version | [optional] 
**quota_change_requests** | [**List[QuotaChangeRequest]**](QuotaChangeRequest.md) | This property is required for providing the region and new quota limits. | [optional] 

## Example

```python
from openapi_client.models.quota_ticket_details import QuotaTicketDetails

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaTicketDetails from a JSON string
quota_ticket_details_instance = QuotaTicketDetails.from_json(json)
# print the JSON string representation of the object
print(QuotaTicketDetails.to_json())

# convert the object into a dict
quota_ticket_details_dict = quota_ticket_details_instance.to_dict()
# create an instance of QuotaTicketDetails from a dict
quota_ticket_details_from_dict = QuotaTicketDetails.from_dict(quota_ticket_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


