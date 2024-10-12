# WebServiceParameter

Web Service Parameter object for node and global parameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_thumbprint** | **str** | If the parameter value in &#39;value&#39; field is encrypted, the thumbprint of the certificate should be put here. | [optional] 
**value** | **object** | The parameter value | [optional] 

## Example

```python
from openapi_client.models.web_service_parameter import WebServiceParameter

# TODO update the JSON string below
json = "{}"
# create an instance of WebServiceParameter from a JSON string
web_service_parameter_instance = WebServiceParameter.from_json(json)
# print the JSON string representation of the object
print(WebServiceParameter.to_json())

# convert the object into a dict
web_service_parameter_dict = web_service_parameter_instance.to_dict()
# create an instance of WebServiceParameter from a dict
web_service_parameter_from_dict = WebServiceParameter.from_dict(web_service_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


