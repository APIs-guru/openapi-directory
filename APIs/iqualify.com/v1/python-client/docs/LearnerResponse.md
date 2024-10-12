# LearnerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**offerings** | [**List[OfferingProgressRow]**](OfferingProgressRow.md) |  | [optional] 
**person_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.learner_response import LearnerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LearnerResponse from a JSON string
learner_response_instance = LearnerResponse.from_json(json)
# print the JSON string representation of the object
print(LearnerResponse.to_json())

# convert the object into a dict
learner_response_dict = learner_response_instance.to_dict()
# create an instance of LearnerResponse from a dict
learner_response_from_dict = LearnerResponse.from_dict(learner_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


