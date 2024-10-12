# CreateActionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResource**](ActionResource.md) |  | 

## Example

```python
from openapi_client.models.create_action_request import CreateActionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateActionRequest from a JSON string
create_action_request_instance = CreateActionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateActionRequest.to_json())

# convert the object into a dict
create_action_request_dict = create_action_request_instance.to_dict()
# create an instance of CreateActionRequest from a dict
create_action_request_from_dict = CreateActionRequest.from_dict(create_action_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


