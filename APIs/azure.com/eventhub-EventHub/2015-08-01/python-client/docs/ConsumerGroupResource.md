# ConsumerGroupResource

Single item in List or Get Consumer group operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ConsumerGroupProperties**](ConsumerGroupProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.consumer_group_resource import ConsumerGroupResource

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerGroupResource from a JSON string
consumer_group_resource_instance = ConsumerGroupResource.from_json(json)
# print the JSON string representation of the object
print(ConsumerGroupResource.to_json())

# convert the object into a dict
consumer_group_resource_dict = consumer_group_resource_instance.to_dict()
# create an instance of ConsumerGroupResource from a dict
consumer_group_resource_from_dict = ConsumerGroupResource.from_dict(consumer_group_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


