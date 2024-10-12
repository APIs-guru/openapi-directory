# ApigatewayApiConfigFile

A lightweight description of a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | The bytes that constitute the file. | [optional] 
**path** | **str** | The file path (full or relative path). This is typically the path of the file when it is uploaded. | [optional] 

## Example

```python
from openapi_client.models.apigateway_api_config_file import ApigatewayApiConfigFile

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayApiConfigFile from a JSON string
apigateway_api_config_file_instance = ApigatewayApiConfigFile.from_json(json)
# print the JSON string representation of the object
print(ApigatewayApiConfigFile.to_json())

# convert the object into a dict
apigateway_api_config_file_dict = apigateway_api_config_file_instance.to_dict()
# create an instance of ApigatewayApiConfigFile from a dict
apigateway_api_config_file_from_dict = ApigatewayApiConfigFile.from_dict(apigateway_api_config_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


