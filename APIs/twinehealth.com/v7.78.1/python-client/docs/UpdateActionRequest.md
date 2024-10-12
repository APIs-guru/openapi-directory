# UpdateActionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResource**](ActionResource.md) |  | 

## Example

```python
from openapi_client.models.update_action_request import UpdateActionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateActionRequest from a JSON string
update_action_request_instance = UpdateActionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateActionRequest.to_json())

# convert the object into a dict
update_action_request_dict = update_action_request_instance.to_dict()
# create an instance of UpdateActionRequest from a dict
update_action_request_from_dict = UpdateActionRequest.from_dict(update_action_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


