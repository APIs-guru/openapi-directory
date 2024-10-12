# ApplicationGetEndpoint

Gets the application SSH endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_port** | **int** | The destination port to connect to. | [optional] 
**location** | **str** | The location of the endpoint. | [optional] 
**public_port** | **int** | The public port to connect to. | [optional] 

## Example

```python
from openapi_client.models.application_get_endpoint import ApplicationGetEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGetEndpoint from a JSON string
application_get_endpoint_instance = ApplicationGetEndpoint.from_json(json)
# print the JSON string representation of the object
print(ApplicationGetEndpoint.to_json())

# convert the object into a dict
application_get_endpoint_dict = application_get_endpoint_instance.to_dict()
# create an instance of ApplicationGetEndpoint from a dict
application_get_endpoint_from_dict = ApplicationGetEndpoint.from_dict(application_get_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


