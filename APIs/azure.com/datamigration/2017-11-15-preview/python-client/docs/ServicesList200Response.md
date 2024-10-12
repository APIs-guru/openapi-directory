# ServicesList200Response

OData page of service objects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to load the next page of services | [optional] 
**value** | [**List[ServicesList200ResponseValueInner]**](ServicesList200ResponseValueInner.md) | List of services | [optional] 

## Example

```python
from openapi_client.models.services_list200_response import ServicesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesList200Response from a JSON string
services_list200_response_instance = ServicesList200Response.from_json(json)
# print the JSON string representation of the object
print(ServicesList200Response.to_json())

# convert the object into a dict
services_list200_response_dict = services_list200_response_instance.to_dict()
# create an instance of ServicesList200Response from a dict
services_list200_response_from_dict = ServicesList200Response.from_dict(services_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


