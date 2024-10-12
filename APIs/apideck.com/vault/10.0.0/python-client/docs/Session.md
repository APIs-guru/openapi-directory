# Session


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_metadata** | [**ConsumerMetadata**](ConsumerMetadata.md) |  | [optional] 
**custom_consumer_settings** | **Dict[str, object]** | Custom consumer settings that are passed as part of the session. | [optional] 
**redirect_uri** | **str** | The URL to redirect the user to after the session has been configured. | [optional] 
**settings** | [**SessionSettings**](SessionSettings.md) |  | [optional] 
**theme** | [**SessionTheme**](SessionTheme.md) |  | [optional] 

## Example

```python
from openapi_client.models.session import Session

# TODO update the JSON string below
json = "{}"
# create an instance of Session from a JSON string
session_instance = Session.from_json(json)
# print the JSON string representation of the object
print(Session.to_json())

# convert the object into a dict
session_dict = session_instance.to_dict()
# create an instance of Session from a dict
session_from_dict = Session.from_dict(session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


