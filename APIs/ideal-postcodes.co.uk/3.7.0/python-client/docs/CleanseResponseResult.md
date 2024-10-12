# CleanseResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** |  | 
**count** | **float** |  | 
**fit** | **float** |  | 
**locality_match** | **str** |  | 
**match** | **object** | Nearest matching address | 
**organisation_match** | **str** |  | 
**post_town_match** | **str** |  | 
**postcode_match** | **str** |  | 
**premise_match** | **str** |  | 
**query** | **str** | Originally submitted query | 
**thoroughfare_match** | **str** |  | 

## Example

```python
from openapi_client.models.cleanse_response_result import CleanseResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of CleanseResponseResult from a JSON string
cleanse_response_result_instance = CleanseResponseResult.from_json(json)
# print the JSON string representation of the object
print(CleanseResponseResult.to_json())

# convert the object into a dict
cleanse_response_result_dict = cleanse_response_result_instance.to_dict()
# create an instance of CleanseResponseResult from a dict
cleanse_response_result_from_dict = CleanseResponseResult.from_dict(cleanse_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


