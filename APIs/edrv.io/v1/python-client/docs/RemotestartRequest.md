# RemotestartRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chargestation** | **str** |  | [optional] 
**connector** | **str** |  | [optional] 
**driver** | **str** |  | [optional] 
**token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.remotestart_request import RemotestartRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemotestartRequest from a JSON string
remotestart_request_instance = RemotestartRequest.from_json(json)
# print the JSON string representation of the object
print(RemotestartRequest.to_json())

# convert the object into a dict
remotestart_request_dict = remotestart_request_instance.to_dict()
# create an instance of RemotestartRequest from a dict
remotestart_request_from_dict = RemotestartRequest.from_dict(remotestart_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


