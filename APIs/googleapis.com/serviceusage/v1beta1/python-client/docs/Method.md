# Method

Method represents a method of an API interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The simple name of this method. | [optional] 
**options** | [**List[Option]**](Option.md) | Any metadata attached to the method. | [optional] 
**request_streaming** | **bool** | If true, the request is streamed. | [optional] 
**request_type_url** | **str** | A URL of the input message type. | [optional] 
**response_streaming** | **bool** | If true, the response is streamed. | [optional] 
**response_type_url** | **str** | The URL of the output message type. | [optional] 
**syntax** | **str** | The source syntax of this method. | [optional] 

## Example

```python
from openapi_client.models.method import Method

# TODO update the JSON string below
json = "{}"
# create an instance of Method from a JSON string
method_instance = Method.from_json(json)
# print the JSON string representation of the object
print(Method.to_json())

# convert the object into a dict
method_dict = method_instance.to_dict()
# create an instance of Method from a dict
method_from_dict = Method.from_dict(method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


