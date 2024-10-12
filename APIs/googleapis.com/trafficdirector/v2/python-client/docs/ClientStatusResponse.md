# ClientStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**List[ClientConfig]**](ClientConfig.md) | Client configs for the clients specified in the ClientStatusRequest. | [optional] 

## Example

```python
from openapi_client.models.client_status_response import ClientStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClientStatusResponse from a JSON string
client_status_response_instance = ClientStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ClientStatusResponse.to_json())

# convert the object into a dict
client_status_response_dict = client_status_response_instance.to_dict()
# create an instance of ClientStatusResponse from a dict
client_status_response_from_dict = ClientStatusResponse.from_dict(client_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


