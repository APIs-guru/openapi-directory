# CsvWebsockets

WebSocket Call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**call_id** | **str** | UUID of the request. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**date_end** | **date** | Date of the end of the call. | [optional] 
**date_start** | **date** | Date of the start of the call. | [optional] 
**duration** | **int** | Duration of the call in seconds. | [optional] 
**price** | **str** | Price of the request. | [optional] 
**status** | **str** | Search only for WebSocket call with corresponding status. | [optional] 
**total_price** | **str** | Total price of the request. | [optional] 

## Example

```python
from openapi_client.models.csv_websockets import CsvWebsockets

# TODO update the JSON string below
json = "{}"
# create an instance of CsvWebsockets from a JSON string
csv_websockets_instance = CsvWebsockets.from_json(json)
# print the JSON string representation of the object
print(CsvWebsockets.to_json())

# convert the object into a dict
csv_websockets_dict = csv_websockets_instance.to_dict()
# create an instance of CsvWebsockets from a dict
csv_websockets_from_dict = CsvWebsockets.from_dict(csv_websockets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


