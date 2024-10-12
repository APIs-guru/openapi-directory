# APITestScoreWrapper


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**district_test_score** | [**APITestScore**](APITestScore.md) |  | [optional] 
**grade** | **str** |  | [optional] 
**school_test_score** | [**APITestScore**](APITestScore.md) |  | [optional] 
**state_test_score** | [**APITestScore**](APITestScore.md) |  | [optional] 
**subject** | **str** | Test subject | [optional] 
**test** | **str** | The name of the state-administered test | [optional] 
**tier1** | **str** | Tier 1 test score description (Enterprise API level only) | [optional] 
**tier2** | **str** | Tier 2 test score description (Enterprise API level only) | [optional] 
**tier3** | **str** | Tier 3 test score description (Enterprise API level only) | [optional] 
**tier4** | **str** | Tier 4 test score description (Enterprise API level only) | [optional] 
**tier5** | **str** | Tier 5 test score description (Enterprise API level only) | [optional] 
**year** | **int** | Year test was administered (2018 &#x3D; 2017-18) | [optional] 

## Example

```python
from openapi_client.models.api_test_score_wrapper import APITestScoreWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of APITestScoreWrapper from a JSON string
api_test_score_wrapper_instance = APITestScoreWrapper.from_json(json)
# print the JSON string representation of the object
print(APITestScoreWrapper.to_json())

# convert the object into a dict
api_test_score_wrapper_dict = api_test_score_wrapper_instance.to_dict()
# create an instance of APITestScoreWrapper from a dict
api_test_score_wrapper_from_dict = APITestScoreWrapper.from_dict(api_test_score_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


