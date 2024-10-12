# EntityLinkingResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[DocumentLinkedEntities]**](DocumentLinkedEntities.md) | Response by document | 
**errors** | [**List[DocumentError]**](DocumentError.md) | Errors by document id. | 
**model_version** | **str** | This field indicates which model is used for scoring. | 
**statistics** | [**RequestStatistics**](RequestStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_linking_result import EntityLinkingResult

# TODO update the JSON string below
json = "{}"
# create an instance of EntityLinkingResult from a JSON string
entity_linking_result_instance = EntityLinkingResult.from_json(json)
# print the JSON string representation of the object
print(EntityLinkingResult.to_json())

# convert the object into a dict
entity_linking_result_dict = entity_linking_result_instance.to_dict()
# create an instance of EntityLinkingResult from a dict
entity_linking_result_from_dict = EntityLinkingResult.from_dict(entity_linking_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


