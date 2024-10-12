# ServiceProperties

Details about Azure service available for support ticket creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Localized name of Azure service | [optional] 

## Example

```python
from openapi_client.models.service_properties import ServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceProperties from a JSON string
service_properties_instance = ServiceProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceProperties.to_json())

# convert the object into a dict
service_properties_dict = service_properties_instance.to_dict()
# create an instance of ServiceProperties from a dict
service_properties_from_dict = ServiceProperties.from_dict(service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


