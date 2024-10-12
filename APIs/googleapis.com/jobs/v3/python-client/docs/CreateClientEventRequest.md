# CreateClientEventRequest

The report event request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_event** | [**ClientEvent**](ClientEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_client_event_request import CreateClientEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateClientEventRequest from a JSON string
create_client_event_request_instance = CreateClientEventRequest.from_json(json)
# print the JSON string representation of the object
print(CreateClientEventRequest.to_json())

# convert the object into a dict
create_client_event_request_dict = create_client_event_request_instance.to_dict()
# create an instance of CreateClientEventRequest from a dict
create_client_event_request_from_dict = CreateClientEventRequest.from_dict(create_client_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


