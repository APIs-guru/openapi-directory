# ComposeRequest

A Compose request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**Object**](Object.md) |  | [optional] 
**kind** | **str** | The kind of item this is. | [optional] [default to 'storage#composeRequest']
**source_objects** | [**List[ComposeRequestSourceObjectsInner]**](ComposeRequestSourceObjectsInner.md) | The list of source objects that will be concatenated into a single object. | [optional] 

## Example

```python
from openapi_client.models.compose_request import ComposeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ComposeRequest from a JSON string
compose_request_instance = ComposeRequest.from_json(json)
# print the JSON string representation of the object
print(ComposeRequest.to_json())

# convert the object into a dict
compose_request_dict = compose_request_instance.to_dict()
# create an instance of ComposeRequest from a dict
compose_request_from_dict = ComposeRequest.from_dict(compose_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


