# AutoscaleSettingResourceCollection

Represents a collection of autoscale setting resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[AutoscaleSettingResource]**](AutoscaleSettingResource.md) | the values for the autoscale setting resources. | 

## Example

```python
from openapi_client.models.autoscale_setting_resource_collection import AutoscaleSettingResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleSettingResourceCollection from a JSON string
autoscale_setting_resource_collection_instance = AutoscaleSettingResourceCollection.from_json(json)
# print the JSON string representation of the object
print(AutoscaleSettingResourceCollection.to_json())

# convert the object into a dict
autoscale_setting_resource_collection_dict = autoscale_setting_resource_collection_instance.to_dict()
# create an instance of AutoscaleSettingResourceCollection from a dict
autoscale_setting_resource_collection_from_dict = AutoscaleSettingResourceCollection.from_dict(autoscale_setting_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


