# ApplicationTransferParam

Template for application transfer parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The type of the transfer parameter, such as &#x60;PRIVACY_LEVEL&#x60;. | [optional] 
**value** | **List[str]** | The value of the transfer parameter, such as &#x60;PRIVATE&#x60; or &#x60;SHARED&#x60;. | [optional] 

## Example

```python
from openapi_client.models.application_transfer_param import ApplicationTransferParam

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTransferParam from a JSON string
application_transfer_param_instance = ApplicationTransferParam.from_json(json)
# print the JSON string representation of the object
print(ApplicationTransferParam.to_json())

# convert the object into a dict
application_transfer_param_dict = application_transfer_param_instance.to_dict()
# create an instance of ApplicationTransferParam from a dict
application_transfer_param_from_dict = ApplicationTransferParam.from_dict(application_transfer_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


