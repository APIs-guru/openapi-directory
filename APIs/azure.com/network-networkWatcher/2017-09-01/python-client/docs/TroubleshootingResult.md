# TroubleshootingResult

Troubleshooting information gained from specified resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The result code of the troubleshooting. | [optional] 
**end_time** | **datetime** | The end time of the troubleshooting. | [optional] 
**results** | [**List[TroubleshootingDetails]**](TroubleshootingDetails.md) | Information from troubleshooting. | [optional] 
**start_time** | **datetime** | The start time of the troubleshooting. | [optional] 

## Example

```python
from openapi_client.models.troubleshooting_result import TroubleshootingResult

# TODO update the JSON string below
json = "{}"
# create an instance of TroubleshootingResult from a JSON string
troubleshooting_result_instance = TroubleshootingResult.from_json(json)
# print the JSON string representation of the object
print(TroubleshootingResult.to_json())

# convert the object into a dict
troubleshooting_result_dict = troubleshooting_result_instance.to_dict()
# create an instance of TroubleshootingResult from a dict
troubleshooting_result_from_dict = TroubleshootingResult.from_dict(troubleshooting_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


