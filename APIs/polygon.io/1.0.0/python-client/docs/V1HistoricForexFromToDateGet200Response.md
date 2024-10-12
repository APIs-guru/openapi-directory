# V1HistoricForexFromToDateGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **date** | Date that was evaluated from the request | [optional] 
**ms_latency** | **int** | Milliseconds of latency for the query results | [optional] 
**status** | **str** | Status of this requests response | [optional] 
**symbol** | **str** | Symbol that was evaluated from the request | [optional] 
**ticks** | [**List[Forex]**](Forex.md) |  | [optional] 

## Example

```python
from openapi_client.models.v1_historic_forex_from_to_date_get200_response import V1HistoricForexFromToDateGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V1HistoricForexFromToDateGet200Response from a JSON string
v1_historic_forex_from_to_date_get200_response_instance = V1HistoricForexFromToDateGet200Response.from_json(json)
# print the JSON string representation of the object
print(V1HistoricForexFromToDateGet200Response.to_json())

# convert the object into a dict
v1_historic_forex_from_to_date_get200_response_dict = v1_historic_forex_from_to_date_get200_response_instance.to_dict()
# create an instance of V1HistoricForexFromToDateGet200Response from a dict
v1_historic_forex_from_to_date_get200_response_from_dict = V1HistoricForexFromToDateGet200Response.from_dict(v1_historic_forex_from_to_date_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


