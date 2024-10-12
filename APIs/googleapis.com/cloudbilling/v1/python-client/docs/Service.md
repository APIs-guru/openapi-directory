# Service

Encapsulates a single service in Google Cloud Platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_entity_name** | **str** | The business under which the service is offered. Ex. \&quot;businessEntities/GCP\&quot;, \&quot;businessEntities/Maps\&quot; | [optional] 
**display_name** | **str** | A human readable display name for this service. | [optional] 
**name** | **str** | The resource name for the service. Example: \&quot;services/DA34-426B-A397\&quot; | [optional] 
**service_id** | **str** | The identifier for the service. Example: \&quot;DA34-426B-A397\&quot; | [optional] 

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


