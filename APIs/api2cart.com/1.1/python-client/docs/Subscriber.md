# Subscriber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**created_time** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**modified_time** | **str** |  | [optional] 
**subscribed** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.subscriber import Subscriber

# TODO update the JSON string below
json = "{}"
# create an instance of Subscriber from a JSON string
subscriber_instance = Subscriber.from_json(json)
# print the JSON string representation of the object
print(Subscriber.to_json())

# convert the object into a dict
subscriber_dict = subscriber_instance.to_dict()
# create an instance of Subscriber from a dict
subscriber_from_dict = Subscriber.from_dict(subscriber_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


