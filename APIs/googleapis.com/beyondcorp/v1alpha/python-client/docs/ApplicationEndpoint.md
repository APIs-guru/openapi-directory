# ApplicationEndpoint

ApplicationEndpoint represents a remote application endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Required. Hostname or IP address of the remote application endpoint. | [optional] 
**port** | **int** | Required. Port of the remote application endpoint. | [optional] 

## Example

```python
from openapi_client.models.application_endpoint import ApplicationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationEndpoint from a JSON string
application_endpoint_instance = ApplicationEndpoint.from_json(json)
# print the JSON string representation of the object
print(ApplicationEndpoint.to_json())

# convert the object into a dict
application_endpoint_dict = application_endpoint_instance.to_dict()
# create an instance of ApplicationEndpoint from a dict
application_endpoint_from_dict = ApplicationEndpoint.from_dict(application_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


