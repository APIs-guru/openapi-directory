# GetRecords200ResponseOneOf4


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
**items_count** | **int** | The number of returned records | [optional] 
**product** | [**ProductWebsocket**](ProductWebsocket.md) |  | [optional] 
**records** | [**List[CsvWebsockets]**](CsvWebsockets.md) | Records in JSON format | [optional] 

## Example

```python
from openapi_client.models.get_records200_response_one_of4 import GetRecords200ResponseOneOf4

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecords200ResponseOneOf4 from a JSON string
get_records200_response_one_of4_instance = GetRecords200ResponseOneOf4.from_json(json)
# print the JSON string representation of the object
print(GetRecords200ResponseOneOf4.to_json())

# convert the object into a dict
get_records200_response_one_of4_dict = get_records200_response_one_of4_instance.to_dict()
# create an instance of GetRecords200ResponseOneOf4 from a dict
get_records200_response_one_of4_from_dict = GetRecords200ResponseOneOf4.from_dict(get_records200_response_one_of4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


