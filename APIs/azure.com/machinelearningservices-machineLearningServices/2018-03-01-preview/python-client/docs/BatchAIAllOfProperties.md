# BatchAIAllOfProperties

BatchAI properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scale_settings** | [**ScaleSettings**](ScaleSettings.md) |  | [optional] 
**vm_priority** | **str** | Virtual Machine priority | [optional] 
**vm_size** | **str** | Virtual Machine Size | [optional] 

## Example

```python
from openapi_client.models.batch_ai_all_of_properties import BatchAIAllOfProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAIAllOfProperties from a JSON string
batch_ai_all_of_properties_instance = BatchAIAllOfProperties.from_json(json)
# print the JSON string representation of the object
print(BatchAIAllOfProperties.to_json())

# convert the object into a dict
batch_ai_all_of_properties_dict = batch_ai_all_of_properties_instance.to_dict()
# create an instance of BatchAIAllOfProperties from a dict
batch_ai_all_of_properties_from_dict = BatchAIAllOfProperties.from_dict(batch_ai_all_of_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


