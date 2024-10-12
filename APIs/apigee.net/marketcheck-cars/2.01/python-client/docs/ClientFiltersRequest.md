# ClientFiltersRequest

A client filters request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | **List[str]** |  | 

## Example

```python
from openapi_client.models.client_filters_request import ClientFiltersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClientFiltersRequest from a JSON string
client_filters_request_instance = ClientFiltersRequest.from_json(json)
# print the JSON string representation of the object
print(ClientFiltersRequest.to_json())

# convert the object into a dict
client_filters_request_dict = client_filters_request_instance.to_dict()
# create an instance of ClientFiltersRequest from a dict
client_filters_request_from_dict = ClientFiltersRequest.from_dict(client_filters_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


