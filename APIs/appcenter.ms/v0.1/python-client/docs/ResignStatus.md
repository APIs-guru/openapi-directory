# ResignStatus

The status of the resign operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Error code for any error that occured during the resigning operation. | [optional] 
**error_message** | **str** | Error message for any error that occured during the resigning operation. | [optional] 
**status** | **str** | The status of the resign | 

## Example

```python
from openapi_client.models.resign_status import ResignStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ResignStatus from a JSON string
resign_status_instance = ResignStatus.from_json(json)
# print the JSON string representation of the object
print(ResignStatus.to_json())

# convert the object into a dict
resign_status_dict = resign_status_instance.to_dict()
# create an instance of ResignStatus from a dict
resign_status_from_dict = ResignStatus.from_dict(resign_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


