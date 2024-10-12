# SummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Summary**](Summary.md) |  | [optional] 
**error** | **str** |  | [optional] 
**requested_currency** | **str** |  | [optional] 
**requested_symbol** | **str** |  | [optional] 
**requested_unit_of_measure** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.summary_response import SummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryResponse from a JSON string
summary_response_instance = SummaryResponse.from_json(json)
# print the JSON string representation of the object
print(SummaryResponse.to_json())

# convert the object into a dict
summary_response_dict = summary_response_instance.to_dict()
# create an instance of SummaryResponse from a dict
summary_response_from_dict = SummaryResponse.from_dict(summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


