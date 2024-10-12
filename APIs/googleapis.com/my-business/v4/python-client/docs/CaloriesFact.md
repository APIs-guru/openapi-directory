# CaloriesFact

This message denotes calories information with an upper bound and lower bound range. Lower amount must be specified. Both lower and upper amounts are non-negative numbers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_amount** | **int** | Required. Lower amount of calories | [optional] 
**unit** | **str** | Required. Unit of the given calories information. | [optional] 
**upper_amount** | **int** | Optional. Upper amount of calories | [optional] 

## Example

```python
from openapi_client.models.calories_fact import CaloriesFact

# TODO update the JSON string below
json = "{}"
# create an instance of CaloriesFact from a JSON string
calories_fact_instance = CaloriesFact.from_json(json)
# print the JSON string representation of the object
print(CaloriesFact.to_json())

# convert the object into a dict
calories_fact_dict = calories_fact_instance.to_dict()
# create an instance of CaloriesFact from a dict
calories_fact_from_dict = CaloriesFact.from_dict(calories_fact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


