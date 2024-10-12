# WebService

Instance of an Azure ML web service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebServiceProperties**](WebServiceProperties.md) |  | 
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**location** | **str** | Specifies the location of the resource. | 
**name** | **str** | Specifies the name of the resource. | [optional] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_service import WebService

# TODO update the JSON string below
json = "{}"
# create an instance of WebService from a JSON string
web_service_instance = WebService.from_json(json)
# print the JSON string representation of the object
print(WebService.to_json())

# convert the object into a dict
web_service_dict = web_service_instance.to_dict()
# create an instance of WebService from a dict
web_service_from_dict = WebService.from_dict(web_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


