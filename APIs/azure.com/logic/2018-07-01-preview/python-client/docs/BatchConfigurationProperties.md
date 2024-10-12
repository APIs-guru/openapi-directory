# BatchConfigurationProperties

The batch configuration properties definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_group_name** | **str** | The name of the batch group. | 
**changed_time** | **datetime** | The changed time. | [optional] 
**created_time** | **datetime** | The created time. | [optional] 
**release_criteria** | [**BatchReleaseCriteria**](BatchReleaseCriteria.md) |  | 
**metadata** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.batch_configuration_properties import BatchConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BatchConfigurationProperties from a JSON string
batch_configuration_properties_instance = BatchConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(BatchConfigurationProperties.to_json())

# convert the object into a dict
batch_configuration_properties_dict = batch_configuration_properties_instance.to_dict()
# create an instance of BatchConfigurationProperties from a dict
batch_configuration_properties_from_dict = BatchConfigurationProperties.from_dict(batch_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


