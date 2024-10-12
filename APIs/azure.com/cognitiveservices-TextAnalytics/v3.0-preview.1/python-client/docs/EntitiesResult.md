# EntitiesResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[DocumentEntities]**](DocumentEntities.md) | Response by document | 
**errors** | [**List[DocumentError]**](DocumentError.md) | Errors by document id. | 
**model_version** | **str** | This field indicates which model is used for scoring. | 
**statistics** | [**RequestStatistics**](RequestStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.entities_result import EntitiesResult

# TODO update the JSON string below
json = "{}"
# create an instance of EntitiesResult from a JSON string
entities_result_instance = EntitiesResult.from_json(json)
# print the JSON string representation of the object
print(EntitiesResult.to_json())

# convert the object into a dict
entities_result_dict = entities_result_instance.to_dict()
# create an instance of EntitiesResult from a dict
entities_result_from_dict = EntitiesResult.from_dict(entities_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


