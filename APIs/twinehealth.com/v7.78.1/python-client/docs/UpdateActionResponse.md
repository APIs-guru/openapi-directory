# UpdateActionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResource**](ActionResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_action_response import UpdateActionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateActionResponse from a JSON string
update_action_response_instance = UpdateActionResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateActionResponse.to_json())

# convert the object into a dict
update_action_response_dict = update_action_response_instance.to_dict()
# create an instance of UpdateActionResponse from a dict
update_action_response_from_dict = UpdateActionResponse.from_dict(update_action_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


