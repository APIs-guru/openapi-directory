# Service

A service that is available for use by the consumer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ServiceConfig**](ServiceConfig.md) |  | [optional] 
**name** | **str** | The resource name of the consumer and service. A valid name would be: - &#x60;projects/123/services/serviceusage.googleapis.com&#x60; | [optional] 
**parent** | **str** | The resource name of the consumer. A valid name would be: - &#x60;projects/123&#x60; | [optional] 
**state** | **str** | Whether or not the service has been enabled for use by the consumer. | [optional] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


