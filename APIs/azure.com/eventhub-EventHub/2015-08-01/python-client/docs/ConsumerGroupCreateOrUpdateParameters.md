# ConsumerGroupCreateOrUpdateParameters

Parameters supplied to the Create Or Update Consumer Group operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the resource. | 
**name** | **str** | Name of the consumer group. | [optional] 
**properties** | [**ConsumerGroupProperties**](ConsumerGroupProperties.md) |  | [optional] 
**type** | **str** | ARM type of the Namespace. | [optional] 

## Example

```python
from openapi_client.models.consumer_group_create_or_update_parameters import ConsumerGroupCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerGroupCreateOrUpdateParameters from a JSON string
consumer_group_create_or_update_parameters_instance = ConsumerGroupCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ConsumerGroupCreateOrUpdateParameters.to_json())

# convert the object into a dict
consumer_group_create_or_update_parameters_dict = consumer_group_create_or_update_parameters_instance.to_dict()
# create an instance of ConsumerGroupCreateOrUpdateParameters from a dict
consumer_group_create_or_update_parameters_from_dict = ConsumerGroupCreateOrUpdateParameters.from_dict(consumer_group_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


