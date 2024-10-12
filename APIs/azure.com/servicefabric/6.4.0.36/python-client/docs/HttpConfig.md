# HttpConfig

Describes the http configuration for external connectivity for this network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hosts** | [**List[HttpHostConfig]**](HttpHostConfig.md) | description for routing. | 
**name** | **str** | http gateway config name. | 
**port** | **int** | Specifies the port at which the service endpoint below needs to be exposed. | 

## Example

```python
from openapi_client.models.http_config import HttpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HttpConfig from a JSON string
http_config_instance = HttpConfig.from_json(json)
# print the JSON string representation of the object
print(HttpConfig.to_json())

# convert the object into a dict
http_config_dict = http_config_instance.to_dict()
# create an instance of HttpConfig from a dict
http_config_from_dict = HttpConfig.from_dict(http_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


