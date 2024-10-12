# HandlerMapping

The IIS handler mappings used to define which handler processes HTTP requests with certain extension.               For example it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **str** | Command-line arguments to be passed to the script processor. | [optional] 
**extension** | **str** | Requests with this extension will be handled using the specified FastCGI application. | [optional] 
**script_processor** | **str** | The absolute path to the FastCGI application. | [optional] 

## Example

```python
from openapi_client.models.handler_mapping import HandlerMapping

# TODO update the JSON string below
json = "{}"
# create an instance of HandlerMapping from a JSON string
handler_mapping_instance = HandlerMapping.from_json(json)
# print the JSON string representation of the object
print(HandlerMapping.to_json())

# convert the object into a dict
handler_mapping_dict = handler_mapping_instance.to_dict()
# create an instance of HandlerMapping from a dict
handler_mapping_from_dict = HandlerMapping.from_dict(handler_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


