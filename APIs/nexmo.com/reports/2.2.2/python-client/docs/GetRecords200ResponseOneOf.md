# GetRecords200ResponseOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**ReportResponseTopLevelLinks**](ReportResponseTopLevelLinks.md) |  | [optional] 
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**ids_not_found** | **str** | If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field. | [optional] 
**price** | **str** | Price of the request. | [optional] 
**received_at** | **date** | Time at which the report request was received by the service. | [optional] 
**request_id** | **str** | UUID of the request. | [optional] 
**request_status** | [**RequestStatus**](RequestStatus.md) |  | [optional] 
**direction** | **str** | Direction of the communication, either &#x60;inbound&#x60; (received by our services), or &#x60;outbound&#x60; (originated from our services). Required for products &#x60;SMS&#x60; and &#x60;MESSAGES&#x60;. Optional for &#x60;VOICE-CALL&#x60;. Invalid for &#x60;IN-APP-VOICE&#x60;, &#x60;CONVERSATIONS&#x60;, &#x60;NUMBER-INSIGHT&#x60;, &#x60;VERIFY-API&#x60;. | [optional] 
**include_message** | **bool** | Include the text of messages in the report. | [optional] 
**items_count** | **int** | The number of returned records | [optional] 
**product** | [**ProductSms**](ProductSms.md) |  | [optional] 
**records** | [**List[JsonSmsOutboundWithBody]**](JsonSmsOutboundWithBody.md) | Records in JSON format | [optional] 
**show_concatenated** | **bool** | Indicates whether the SMS was split up into multiple parts (due to its length). | [optional] 

## Example

```python
from openapi_client.models.get_records200_response_one_of import GetRecords200ResponseOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecords200ResponseOneOf from a JSON string
get_records200_response_one_of_instance = GetRecords200ResponseOneOf.from_json(json)
# print the JSON string representation of the object
print(GetRecords200ResponseOneOf.to_json())

# convert the object into a dict
get_records200_response_one_of_dict = get_records200_response_one_of_instance.to_dict()
# create an instance of GetRecords200ResponseOneOf from a dict
get_records200_response_one_of_from_dict = GetRecords200ResponseOneOf.from_dict(get_records200_response_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


