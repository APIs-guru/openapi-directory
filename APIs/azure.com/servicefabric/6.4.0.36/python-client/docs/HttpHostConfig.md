# HttpHostConfig

Describes the hostname properties for http routing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | http hostname config name. | 
**routes** | [**List[HttpRouteConfig]**](HttpRouteConfig.md) | Route information to use for routing. Routes are processed in the order they are specified. Specify routes that are more specific before routes that can handle general cases. | 

## Example

```python
from openapi_client.models.http_host_config import HttpHostConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HttpHostConfig from a JSON string
http_host_config_instance = HttpHostConfig.from_json(json)
# print the JSON string representation of the object
print(HttpHostConfig.to_json())

# convert the object into a dict
http_host_config_dict = http_host_config_instance.to_dict()
# create an instance of HttpHostConfig from a dict
http_host_config_from_dict = HttpHostConfig.from_dict(http_host_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


