# ConsumerConnection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | [**AuthType**](AuthType.md) |  | [optional] 
**consumer_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**icon** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**logo** | **str** |  | [optional] 
**metadata** | **Dict[str, object]** | Attach your own consumer specific metadata | [optional] 
**name** | **str** |  | [optional] 
**service_id** | **str** |  | [optional] 
**settings** | **object** | Connection settings. Values will persist to &#x60;form_fields&#x60; with corresponding id | [optional] 
**state** | **str** |  | [optional] 
**tag_line** | **str** |  | [optional] [readonly] 
**unified_api** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**website** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.consumer_connection import ConsumerConnection

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerConnection from a JSON string
consumer_connection_instance = ConsumerConnection.from_json(json)
# print the JSON string representation of the object
print(ConsumerConnection.to_json())

# convert the object into a dict
consumer_connection_dict = consumer_connection_instance.to_dict()
# create an instance of ConsumerConnection from a dict
consumer_connection_from_dict = ConsumerConnection.from_dict(consumer_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


