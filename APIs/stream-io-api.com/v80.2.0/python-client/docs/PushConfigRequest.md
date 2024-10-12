# PushConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offline_only** | **bool** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.push_config_request import PushConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PushConfigRequest from a JSON string
push_config_request_instance = PushConfigRequest.from_json(json)
# print the JSON string representation of the object
print(PushConfigRequest.to_json())

# convert the object into a dict
push_config_request_dict = push_config_request_instance.to_dict()
# create an instance of PushConfigRequest from a dict
push_config_request_from_dict = PushConfigRequest.from_dict(push_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


