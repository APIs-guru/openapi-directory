# EndpointApp

Connect to an App User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of connection. Must be &#x60;app&#x60; | 
**user** | **str** | The username to connect to | 

## Example

```python
from openapi_client.models.endpoint_app import EndpointApp

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointApp from a JSON string
endpoint_app_instance = EndpointApp.from_json(json)
# print the JSON string representation of the object
print(EndpointApp.to_json())

# convert the object into a dict
endpoint_app_dict = endpoint_app_instance.to_dict()
# create an instance of EndpointApp from a dict
endpoint_app_from_dict = EndpointApp.from_dict(endpoint_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


