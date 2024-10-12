# ServiceItem

A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_form_service_item** | [**FreeFormServiceItem**](FreeFormServiceItem.md) |  | [optional] 
**price** | [**Money**](Money.md) |  | [optional] 
**structured_service_item** | [**StructuredServiceItem**](StructuredServiceItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_item import ServiceItem

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceItem from a JSON string
service_item_instance = ServiceItem.from_json(json)
# print the JSON string representation of the object
print(ServiceItem.to_json())

# convert the object into a dict
service_item_dict = service_item_instance.to_dict()
# create an instance of ServiceItem from a dict
service_item_from_dict = ServiceItem.from_dict(service_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


