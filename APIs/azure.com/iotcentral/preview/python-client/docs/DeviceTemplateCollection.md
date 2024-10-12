# DeviceTemplateCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next page of device templates. | [optional] 
**value** | [**List[DeviceTemplate]**](DeviceTemplate.md) | The collection of device templates. | 

## Example

```python
from openapi_client.models.device_template_collection import DeviceTemplateCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceTemplateCollection from a JSON string
device_template_collection_instance = DeviceTemplateCollection.from_json(json)
# print the JSON string representation of the object
print(DeviceTemplateCollection.to_json())

# convert the object into a dict
device_template_collection_dict = device_template_collection_instance.to_dict()
# create an instance of DeviceTemplateCollection from a dict
device_template_collection_from_dict = DeviceTemplateCollection.from_dict(device_template_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


