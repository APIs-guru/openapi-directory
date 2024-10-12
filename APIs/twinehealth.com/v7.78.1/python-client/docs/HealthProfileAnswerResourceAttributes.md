# HealthProfileAnswerResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history** | [**List[HealthProfileAnswerResourceAttributesHistoryInner]**](HealthProfileAnswerResourceAttributesHistoryInner.md) | List of details of previous answers for a health profile question | [optional] 
**latest** | [**HealthProfileAnswerResourceAttributesLatest**](HealthProfileAnswerResourceAttributesLatest.md) |  | [optional] 
**question_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.health_profile_answer_resource_attributes import HealthProfileAnswerResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileAnswerResourceAttributes from a JSON string
health_profile_answer_resource_attributes_instance = HealthProfileAnswerResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(HealthProfileAnswerResourceAttributes.to_json())

# convert the object into a dict
health_profile_answer_resource_attributes_dict = health_profile_answer_resource_attributes_instance.to_dict()
# create an instance of HealthProfileAnswerResourceAttributes from a dict
health_profile_answer_resource_attributes_from_dict = HealthProfileAnswerResourceAttributes.from_dict(health_profile_answer_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


