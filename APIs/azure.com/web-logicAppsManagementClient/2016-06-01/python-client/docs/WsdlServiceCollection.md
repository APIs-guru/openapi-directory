# WsdlServiceCollection

A list of custom API WSDL interfaces

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[WsdlService]**](WsdlService.md) | Collection of WSDL interfaces | [optional] 

## Example

```python
from openapi_client.models.wsdl_service_collection import WsdlServiceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of WsdlServiceCollection from a JSON string
wsdl_service_collection_instance = WsdlServiceCollection.from_json(json)
# print the JSON string representation of the object
print(WsdlServiceCollection.to_json())

# convert the object into a dict
wsdl_service_collection_dict = wsdl_service_collection_instance.to_dict()
# create an instance of WsdlServiceCollection from a dict
wsdl_service_collection_from_dict = WsdlServiceCollection.from_dict(wsdl_service_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


