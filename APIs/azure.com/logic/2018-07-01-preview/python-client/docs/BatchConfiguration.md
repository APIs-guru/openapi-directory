# BatchConfiguration

The batch configuration resource definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BatchConfigurationProperties**](BatchConfigurationProperties.md) |  | 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.batch_configuration import BatchConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BatchConfiguration from a JSON string
batch_configuration_instance = BatchConfiguration.from_json(json)
# print the JSON string representation of the object
print(BatchConfiguration.to_json())

# convert the object into a dict
batch_configuration_dict = batch_configuration_instance.to_dict()
# create an instance of BatchConfiguration from a dict
batch_configuration_from_dict = BatchConfiguration.from_dict(batch_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


