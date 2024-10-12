# PlateCandidate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence percentage that the plate number is correct | [optional] 
**matches_template** | **int** | Indicates whether the plate matched a regional text pattern | [optional] 
**plate** | **str** | Plate number | [optional] 

## Example

```python
from openapi_client.models.plate_candidate import PlateCandidate

# TODO update the JSON string below
json = "{}"
# create an instance of PlateCandidate from a JSON string
plate_candidate_instance = PlateCandidate.from_json(json)
# print the JSON string representation of the object
print(PlateCandidate.to_json())

# convert the object into a dict
plate_candidate_dict = plate_candidate_instance.to_dict()
# create an instance of PlateCandidate from a dict
plate_candidate_from_dict = PlateCandidate.from_dict(plate_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


