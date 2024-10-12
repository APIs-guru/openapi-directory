# XiaomiConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** |  | [optional] 
**package_name** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.xiaomi_config_request import XiaomiConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of XiaomiConfigRequest from a JSON string
xiaomi_config_request_instance = XiaomiConfigRequest.from_json(json)
# print the JSON string representation of the object
print(XiaomiConfigRequest.to_json())

# convert the object into a dict
xiaomi_config_request_dict = xiaomi_config_request_instance.to_dict()
# create an instance of XiaomiConfigRequest from a dict
xiaomi_config_request_from_dict = XiaomiConfigRequest.from_dict(xiaomi_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


