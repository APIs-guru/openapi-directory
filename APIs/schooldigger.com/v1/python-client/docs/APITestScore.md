# APITestScore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mean_scaled_score** | **float** | Mean scale score | [optional] 
**num_tier1** | **int** | Count of students performing at tier 1 (Enterprise API level only) | [optional] 
**num_tier2** | **int** | Count of students performing at tier 2 (Enterprise API level only) | [optional] 
**num_tier3** | **int** | Count of students performing at tier 3 (Enterprise API level only) | [optional] 
**num_tier4** | **int** | Count of students performing at tier 4 (Enterprise API level only) | [optional] 
**num_tier5** | **int** | Count of students performing at tier 5 (Enterprise API level only) | [optional] 
**number_met_standard** | **float** | Count of students meeting state standard | [optional] 
**percent_met_standard** | **float** | Percent of students meeting state standard | [optional] 
**percent_tier1** | **float** | Percent of students performing at tier 1 (Enterprise API level only) | [optional] 
**percent_tier2** | **float** | Percent of students performing at tier 2 (Enterprise API level only) | [optional] 
**percent_tier3** | **float** | Percent of students performing at tier 3 (Enterprise API level only) | [optional] 
**percent_tier4** | **float** | Percent of students performing at tier 4 (Enterprise API level only) | [optional] 
**percent_tier5** | **float** | Percent of students performing at tier 5 (Enterprise API level only) | [optional] 
**students_eligible** | **int** | Count of students eligible to take test | [optional] 
**students_tested** | **int** | Count of students tested | [optional] 

## Example

```python
from openapi_client.models.api_test_score import APITestScore

# TODO update the JSON string below
json = "{}"
# create an instance of APITestScore from a JSON string
api_test_score_instance = APITestScore.from_json(json)
# print the JSON string representation of the object
print(APITestScore.to_json())

# convert the object into a dict
api_test_score_dict = api_test_score_instance.to_dict()
# create an instance of APITestScore from a dict
api_test_score_from_dict = APITestScore.from_dict(api_test_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


