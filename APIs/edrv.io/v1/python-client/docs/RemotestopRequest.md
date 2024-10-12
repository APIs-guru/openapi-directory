# RemotestopRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chargestation** | **str** |  | [optional] 
**driver** | **str** |  | [optional] 
**transaction** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.remotestop_request import RemotestopRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemotestopRequest from a JSON string
remotestop_request_instance = RemotestopRequest.from_json(json)
# print the JSON string representation of the object
print(RemotestopRequest.to_json())

# convert the object into a dict
remotestop_request_dict = remotestop_request_instance.to_dict()
# create an instance of RemotestopRequest from a dict
remotestop_request_from_dict = RemotestopRequest.from_dict(remotestop_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


