# ListServiceLevelObjectivesResponse

The ListServiceLevelObjectives response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. | [optional] 
**service_level_objectives** | [**List[ServiceLevelObjective]**](ServiceLevelObjective.md) | The ServiceLevelObjectives matching the specified filter. | [optional] 

## Example

```python
from openapi_client.models.list_service_level_objectives_response import ListServiceLevelObjectivesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceLevelObjectivesResponse from a JSON string
list_service_level_objectives_response_instance = ListServiceLevelObjectivesResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceLevelObjectivesResponse.to_json())

# convert the object into a dict
list_service_level_objectives_response_dict = list_service_level_objectives_response_instance.to_dict()
# create an instance of ListServiceLevelObjectivesResponse from a dict
list_service_level_objectives_response_from_dict = ListServiceLevelObjectivesResponse.from_dict(list_service_level_objectives_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


