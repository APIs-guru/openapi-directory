# CsvNi

Number Insight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**country** | **str** | Country of the looked up number. | [optional] 
**country_name** | **str** | Country name of the looked up number. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**date_received** | **date** | Date of the request. | [optional] 
**first_name** | **str** | First name of the owner of the looked up number. | [optional] 
**last_name** | **str** | Last name of the owner of the looked up number. | [optional] 
**network** | **str** | Network of the looked up number. | [optional] 
**network_name** | **str** | Network name of the looked up number. | [optional] 
**network_type** | **str** | Network type of the looked up number. | [optional] 
**number** | **str** | Number looked up for this request. | [optional] 
**ported** | **str** | Is the looked up number ported. | [optional] 
**product_type** | **str** | Type of Number Insight request. | [optional] 
**reachable** | **str** | Is the looked up number reachable. | [optional] 
**request_id** | **str** | UUID of the request. | [optional] 
**response_code** | **str** | Response code of the Number Insight request. | [optional] 
**status** | **str** | Status of the Number Insight request. | [optional] 
**total_price** | **str** | Total price of the request. | [optional] 
**valid** | **str** | Is the looked up number valid. | [optional] 

## Example

```python
from openapi_client.models.csv_ni import CsvNi

# TODO update the JSON string below
json = "{}"
# create an instance of CsvNi from a JSON string
csv_ni_instance = CsvNi.from_json(json)
# print the JSON string representation of the object
print(CsvNi.to_json())

# convert the object into a dict
csv_ni_dict = csv_ni_instance.to_dict()
# create an instance of CsvNi from a dict
csv_ni_from_dict = CsvNi.from_dict(csv_ni_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


