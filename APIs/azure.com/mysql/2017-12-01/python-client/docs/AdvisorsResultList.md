# AdvisorsResultList

A list of query statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[Advisor]**](Advisor.md) | The list of recommendation action advisors. | [optional] [readonly] 

## Example

```python
from openapi_client.models.advisors_result_list import AdvisorsResultList

# TODO update the JSON string below
json = "{}"
# create an instance of AdvisorsResultList from a JSON string
advisors_result_list_instance = AdvisorsResultList.from_json(json)
# print the JSON string representation of the object
print(AdvisorsResultList.to_json())

# convert the object into a dict
advisors_result_list_dict = advisors_result_list_instance.to_dict()
# create an instance of AdvisorsResultList from a dict
advisors_result_list_from_dict = AdvisorsResultList.from_dict(advisors_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


