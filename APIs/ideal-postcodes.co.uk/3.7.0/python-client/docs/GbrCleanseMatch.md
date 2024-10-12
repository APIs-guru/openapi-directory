# GbrCleanseMatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | A confidence score represented as number between 1 and 0. 1 indicates a full match. 0 indicates no complete matching elements.  | 
**count** | **float** | The number of addresses we matched to the input. We return the closest match by default.  | 
**fit** | **float** | A score represented as number between 1 and 0. Fit compares the address elements present in your query against the matching address elements. It does not incorporate elements you have not presented in the score. A partial address (e.g. 12 Pye Green Road) will have a fit of 1 even though it is missing post town and postcode. Its confidence score will be less than 1 however because it is missing some crucial elements.  | 
**locality_match** | **str** | Match indicator for the locality | 
**match** | [**GbrCleanseMatchMatch**](GbrCleanseMatchMatch.md) |  | 
**organisation_match** | **str** | Match indicator for the organisation | 
**post_town_match** | **str** | Match indicator for the post_town | 
**postcode_match** | **str** | Match indicator for the postcode | 
**premise_match** | **str** | Match indicator for the premise | 
**query** | **str** | Originally submitted query | 
**thoroughfare_match** | **str** | Match indicator for the street | 

## Example

```python
from openapi_client.models.gbr_cleanse_match import GbrCleanseMatch

# TODO update the JSON string below
json = "{}"
# create an instance of GbrCleanseMatch from a JSON string
gbr_cleanse_match_instance = GbrCleanseMatch.from_json(json)
# print the JSON string representation of the object
print(GbrCleanseMatch.to_json())

# convert the object into a dict
gbr_cleanse_match_dict = gbr_cleanse_match_instance.to_dict()
# create an instance of GbrCleanseMatch from a dict
gbr_cleanse_match_from_dict = GbrCleanseMatch.from_dict(gbr_cleanse_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


