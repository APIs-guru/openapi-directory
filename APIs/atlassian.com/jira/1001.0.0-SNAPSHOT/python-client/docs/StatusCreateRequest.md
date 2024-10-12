# StatusCreateRequest

Details of the statuses being created and their scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**StatusScope**](StatusScope.md) |  | 
**statuses** | [**List[StatusCreate]**](StatusCreate.md) | Details of the statuses being created. | 

## Example

```python
from openapi_client.models.status_create_request import StatusCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StatusCreateRequest from a JSON string
status_create_request_instance = StatusCreateRequest.from_json(json)
# print the JSON string representation of the object
print(StatusCreateRequest.to_json())

# convert the object into a dict
status_create_request_dict = status_create_request_instance.to_dict()
# create an instance of StatusCreateRequest from a dict
status_create_request_from_dict = StatusCreateRequest.from_dict(status_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


