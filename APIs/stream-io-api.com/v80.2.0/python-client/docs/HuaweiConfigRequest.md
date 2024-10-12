# HuaweiConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.huawei_config_request import HuaweiConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HuaweiConfigRequest from a JSON string
huawei_config_request_instance = HuaweiConfigRequest.from_json(json)
# print the JSON string representation of the object
print(HuaweiConfigRequest.to_json())

# convert the object into a dict
huawei_config_request_dict = huawei_config_request_instance.to_dict()
# create an instance of HuaweiConfigRequest from a dict
huawei_config_request_from_dict = HuaweiConfigRequest.from_dict(huawei_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


