# RecommendationAction

Represents a Recommendation Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecommendationActionProperties**](RecommendationActionProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommendation_action import RecommendationAction

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationAction from a JSON string
recommendation_action_instance = RecommendationAction.from_json(json)
# print the JSON string representation of the object
print(RecommendationAction.to_json())

# convert the object into a dict
recommendation_action_dict = recommendation_action_instance.to_dict()
# create an instance of RecommendationAction from a dict
recommendation_action_from_dict = RecommendationAction.from_dict(recommendation_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


