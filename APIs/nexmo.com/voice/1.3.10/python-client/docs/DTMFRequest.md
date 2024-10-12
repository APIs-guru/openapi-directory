# DTMFRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digits** | **str** | The digits to send | [optional] 

## Example

```python
from openapi_client.models.dtmf_request import DTMFRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DTMFRequest from a JSON string
dtmf_request_instance = DTMFRequest.from_json(json)
# print the JSON string representation of the object
print(DTMFRequest.to_json())

# convert the object into a dict
dtmf_request_dict = dtmf_request_instance.to_dict()
# create an instance of DTMFRequest from a dict
dtmf_request_from_dict = DTMFRequest.from_dict(dtmf_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


