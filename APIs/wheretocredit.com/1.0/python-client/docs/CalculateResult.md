# CalculateResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | Error message if the API call was not successful. | [optional] 
**success** | **bool** | Indicates whether the API call was successful. | [optional] 
**value** | [**CalculateItineraryResult**](CalculateItineraryResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.calculate_result import CalculateResult

# TODO update the JSON string below
json = "{}"
# create an instance of CalculateResult from a JSON string
calculate_result_instance = CalculateResult.from_json(json)
# print the JSON string representation of the object
print(CalculateResult.to_json())

# convert the object into a dict
calculate_result_dict = calculate_result_instance.to_dict()
# create an instance of CalculateResult from a dict
calculate_result_from_dict = CalculateResult.from_dict(calculate_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


