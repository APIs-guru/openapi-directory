# DTMFResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Description of the action taken | [optional] 
**uuid** | **str** | The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls | [optional] 

## Example

```python
from openapi_client.models.dtmf_response import DTMFResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DTMFResponse from a JSON string
dtmf_response_instance = DTMFResponse.from_json(json)
# print the JSON string representation of the object
print(DTMFResponse.to_json())

# convert the object into a dict
dtmf_response_dict = dtmf_response_instance.to_dict()
# create an instance of DTMFResponse from a dict
dtmf_response_from_dict = DTMFResponse.from_dict(dtmf_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


