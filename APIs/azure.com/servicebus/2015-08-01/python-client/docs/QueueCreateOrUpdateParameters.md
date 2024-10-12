# QueueCreateOrUpdateParameters

Parameters supplied to the Create Or Update Queue operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | location of the resource. | 
**name** | **str** | Queue name. | [optional] 
**properties** | [**QueueProperties**](QueueProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.queue_create_or_update_parameters import QueueCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of QueueCreateOrUpdateParameters from a JSON string
queue_create_or_update_parameters_instance = QueueCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(QueueCreateOrUpdateParameters.to_json())

# convert the object into a dict
queue_create_or_update_parameters_dict = queue_create_or_update_parameters_instance.to_dict()
# create an instance of QueueCreateOrUpdateParameters from a dict
queue_create_or_update_parameters_from_dict = QueueCreateOrUpdateParameters.from_dict(queue_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


