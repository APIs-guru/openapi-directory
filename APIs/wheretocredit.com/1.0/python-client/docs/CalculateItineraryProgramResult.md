# CalculateItineraryProgramResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airlines** | **List[str]** | Two-letter IATA carrier codes that are associated with the frequent flyer program. | [optional] 
**id** | **str** | Unique identifier for the frequent flyer program. See &lt;code&gt;Programs&lt;/code&gt; API. | [optional] 
**name** | **str** | Frequent flyer program name. See &lt;code&gt;Programs&lt;/code&gt; API. | [optional] 
**revenue_based** | **bool** | Indicates that the itinerary includes revenue-based miles earnings. | [optional] 
**unpublished** | **bool** | Indicates that the itinerary may be missing miles due to unpublished earning rates from the program. | [optional] 
**value** | **int** | Total redeemable miles or points earned for the frequent flyer program. | [optional] 

## Example

```python
from openapi_client.models.calculate_itinerary_program_result import CalculateItineraryProgramResult

# TODO update the JSON string below
json = "{}"
# create an instance of CalculateItineraryProgramResult from a JSON string
calculate_itinerary_program_result_instance = CalculateItineraryProgramResult.from_json(json)
# print the JSON string representation of the object
print(CalculateItineraryProgramResult.to_json())

# convert the object into a dict
calculate_itinerary_program_result_dict = calculate_itinerary_program_result_instance.to_dict()
# create an instance of CalculateItineraryProgramResult from a dict
calculate_itinerary_program_result_from_dict = CalculateItineraryProgramResult.from_dict(calculate_itinerary_program_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


