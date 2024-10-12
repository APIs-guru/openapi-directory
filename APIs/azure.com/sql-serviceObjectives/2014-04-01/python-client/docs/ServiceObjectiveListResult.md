# ServiceObjectiveListResult

Represents the response to a get database service objectives request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ServiceObjective]**](ServiceObjective.md) | The list of database service objectives. | 

## Example

```python
from openapi_client.models.service_objective_list_result import ServiceObjectiveListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceObjectiveListResult from a JSON string
service_objective_list_result_instance = ServiceObjectiveListResult.from_json(json)
# print the JSON string representation of the object
print(ServiceObjectiveListResult.to_json())

# convert the object into a dict
service_objective_list_result_dict = service_objective_list_result_instance.to_dict()
# create an instance of ServiceObjectiveListResult from a dict
service_objective_list_result_from_dict = ServiceObjectiveListResult.from_dict(service_objective_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


