# AutoscaleSetting

A setting that contains all of the configuration for the automatic scaling of a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is &#39;true&#39;. | [optional] [default to True]
**name** | **str** | the name of the autoscale setting. | [optional] 
**notifications** | [**List[AutoscaleNotification]**](AutoscaleNotification.md) | the collection of notifications. | [optional] 
**profiles** | [**List[AutoscaleProfile]**](AutoscaleProfile.md) | the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified. | 
**target_resource_uri** | **str** | the resource identifier of the resource that the autoscale setting should be added to. | [optional] 

## Example

```python
from openapi_client.models.autoscale_setting import AutoscaleSetting

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleSetting from a JSON string
autoscale_setting_instance = AutoscaleSetting.from_json(json)
# print the JSON string representation of the object
print(AutoscaleSetting.to_json())

# convert the object into a dict
autoscale_setting_dict = autoscale_setting_instance.to_dict()
# create an instance of AutoscaleSetting from a dict
autoscale_setting_from_dict = AutoscaleSetting.from_dict(autoscale_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


