# APIDefinitionNotifications


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oauth_on_keychange_url** | **str** |  | [optional] 
**shared_secret** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_notifications import APIDefinitionNotifications

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionNotifications from a JSON string
api_definition_notifications_instance = APIDefinitionNotifications.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionNotifications.to_json())

# convert the object into a dict
api_definition_notifications_dict = api_definition_notifications_instance.to_dict()
# create an instance of APIDefinitionNotifications from a dict
api_definition_notifications_from_dict = APIDefinitionNotifications.from_dict(api_definition_notifications_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


