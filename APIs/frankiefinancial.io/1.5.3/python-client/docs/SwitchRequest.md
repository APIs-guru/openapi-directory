# SwitchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmation** | **List[str]** | Array of strings containing all the keys of the elements that required confirmation in the EIC. The absence of any key for a mandatory confirmation will result in an error response. | [optional] 
**correlation_id** | **str** | Correlation ID as passed to comparison request | 
**details** | [**SwitchDetails**](SwitchDetails.md) |  | 

## Example

```python
from openapi_client.models.switch_request import SwitchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchRequest from a JSON string
switch_request_instance = SwitchRequest.from_json(json)
# print the JSON string representation of the object
print(SwitchRequest.to_json())

# convert the object into a dict
switch_request_dict = switch_request_instance.to_dict()
# create an instance of SwitchRequest from a dict
switch_request_from_dict = SwitchRequest.from_dict(switch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


