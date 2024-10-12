# ActivityProvider

The service provider that initially published this activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | Name of the service provider. | [optional] 

## Example

```python
from openapi_client.models.activity_provider import ActivityProvider

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityProvider from a JSON string
activity_provider_instance = ActivityProvider.from_json(json)
# print the JSON string representation of the object
print(ActivityProvider.to_json())

# convert the object into a dict
activity_provider_dict = activity_provider_instance.to_dict()
# create an instance of ActivityProvider from a dict
activity_provider_from_dict = ActivityProvider.from_dict(activity_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


