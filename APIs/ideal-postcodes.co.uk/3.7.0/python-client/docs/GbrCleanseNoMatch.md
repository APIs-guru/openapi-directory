# GbrCleanseNoMatch


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
from openapi_client.models.gbr_cleanse_no_match import GbrCleanseNoMatch

# TODO update the JSON string below
json = "{}"
# create an instance of GbrCleanseNoMatch from a JSON string
gbr_cleanse_no_match_instance = GbrCleanseNoMatch.from_json(json)
# print the JSON string representation of the object
print(GbrCleanseNoMatch.to_json())

# convert the object into a dict
gbr_cleanse_no_match_dict = gbr_cleanse_no_match_instance.to_dict()
# create an instance of GbrCleanseNoMatch from a dict
gbr_cleanse_no_match_from_dict = GbrCleanseNoMatch.from_dict(gbr_cleanse_no_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


