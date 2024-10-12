# OverallQualityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_quality** | **int** |  | [optional] 
**end_date** | **str** |  | [optional] 
**row_count** | **int** |  | [optional] 
**sites** | **str** |  | [optional] 
**start_date** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.overall_quality_response import OverallQualityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OverallQualityResponse from a JSON string
overall_quality_response_instance = OverallQualityResponse.from_json(json)
# print the JSON string representation of the object
print(OverallQualityResponse.to_json())

# convert the object into a dict
overall_quality_response_dict = overall_quality_response_instance.to_dict()
# create an instance of OverallQualityResponse from a dict
overall_quality_response_from_dict = OverallQualityResponse.from_dict(overall_quality_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


