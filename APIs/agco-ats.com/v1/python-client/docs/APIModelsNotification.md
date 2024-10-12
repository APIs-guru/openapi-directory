# APIModelsNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cc_addresses** | **List[str]** |  | [optional] 
**is_body_html** | **bool** |  | 
**message_body** | **str** |  | 
**subject** | **str** |  | 
**to_addresses** | **List[str]** |  | 

## Example

```python
from openapi_client.models.api_models_notification import APIModelsNotification

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsNotification from a JSON string
api_models_notification_instance = APIModelsNotification.from_json(json)
# print the JSON string representation of the object
print(APIModelsNotification.to_json())

# convert the object into a dict
api_models_notification_dict = api_models_notification_instance.to_dict()
# create an instance of APIModelsNotification from a dict
api_models_notification_from_dict = APIModelsNotification.from_dict(api_models_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


