# CloneRequest

Clone Job Request Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CloneRequestProperties**](CloneRequestProperties.md) |  | 

## Example

```python
from openapi_client.models.clone_request import CloneRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloneRequest from a JSON string
clone_request_instance = CloneRequest.from_json(json)
# print the JSON string representation of the object
print(CloneRequest.to_json())

# convert the object into a dict
clone_request_dict = clone_request_instance.to_dict()
# create an instance of CloneRequest from a dict
clone_request_from_dict = CloneRequest.from_dict(clone_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


