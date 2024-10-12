# BuildBetaNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.build_beta_notification import BuildBetaNotification

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaNotification from a JSON string
build_beta_notification_instance = BuildBetaNotification.from_json(json)
# print the JSON string representation of the object
print(BuildBetaNotification.to_json())

# convert the object into a dict
build_beta_notification_dict = build_beta_notification_instance.to_dict()
# create an instance of BuildBetaNotification from a dict
build_beta_notification_from_dict = BuildBetaNotification.from_dict(build_beta_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


