# SwitchError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | The correlationId as passed in the request | 
**error_code** | **int** | * &#x60;400&#x60; - The request was malformed * &#x60;422&#x60; - Invalid request parameter  | 
**message** | **str** | Text to provide more details on errorCode | 
**version** | **str** | Version of the API on which the switch response took place. This value should be reported with any issue raised. | 

## Example

```python
from openapi_client.models.switch_error import SwitchError

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchError from a JSON string
switch_error_instance = SwitchError.from_json(json)
# print the JSON string representation of the object
print(SwitchError.to_json())

# convert the object into a dict
switch_error_dict = switch_error_instance.to_dict()
# create an instance of SwitchError from a dict
switch_error_from_dict = SwitchError.from_dict(switch_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


