# UpdateEntitiesWithConditionsResponse

Response message for EntityService.UpdateEntitiesWithConditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | **Dict[str, object]** | Response returned by the external system. | [optional] 

## Example

```python
from openapi_client.models.update_entities_with_conditions_response import UpdateEntitiesWithConditionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEntitiesWithConditionsResponse from a JSON string
update_entities_with_conditions_response_instance = UpdateEntitiesWithConditionsResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateEntitiesWithConditionsResponse.to_json())

# convert the object into a dict
update_entities_with_conditions_response_dict = update_entities_with_conditions_response_instance.to_dict()
# create an instance of UpdateEntitiesWithConditionsResponse from a dict
update_entities_with_conditions_response_from_dict = UpdateEntitiesWithConditionsResponse.from_dict(update_entities_with_conditions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


