# WsdlService

The service with name and endpoint names

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_qualified_names** | **List[str]** | List of the endpoints&#39; qualified names | [optional] 
**qualified_name** | **str** | The service&#39;s qualified name | 

## Example

```python
from openapi_client.models.wsdl_service import WsdlService

# TODO update the JSON string below
json = "{}"
# create an instance of WsdlService from a JSON string
wsdl_service_instance = WsdlService.from_json(json)
# print the JSON string representation of the object
print(WsdlService.to_json())

# convert the object into a dict
wsdl_service_dict = wsdl_service_instance.to_dict()
# create an instance of WsdlService from a dict
wsdl_service_from_dict = WsdlService.from_dict(wsdl_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


