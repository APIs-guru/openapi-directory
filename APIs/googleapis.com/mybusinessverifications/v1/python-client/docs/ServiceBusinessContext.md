# ServiceBusinessContext

Additional data for service business verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**PostalAddress**](PostalAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_business_context import ServiceBusinessContext

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusinessContext from a JSON string
service_business_context_instance = ServiceBusinessContext.from_json(json)
# print the JSON string representation of the object
print(ServiceBusinessContext.to_json())

# convert the object into a dict
service_business_context_dict = service_business_context_instance.to_dict()
# create an instance of ServiceBusinessContext from a dict
service_business_context_from_dict = ServiceBusinessContext.from_dict(service_business_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


