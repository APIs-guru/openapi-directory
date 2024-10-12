# Status

The status of an Azure resource at the time the operation was called.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_status** | **str** | The short label for the status. | [optional] [readonly] 
**message** | **str** | The detailed message for the status, including alerts and error messages. | [optional] [readonly] 
**timestamp** | **datetime** | The timestamp when the status was changed to the current value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.status import Status

# TODO update the JSON string below
json = "{}"
# create an instance of Status from a JSON string
status_instance = Status.from_json(json)
# print the JSON string representation of the object
print(Status.to_json())

# convert the object into a dict
status_dict = status_instance.to_dict()
# create an instance of Status from a dict
status_from_dict = Status.from_dict(status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


