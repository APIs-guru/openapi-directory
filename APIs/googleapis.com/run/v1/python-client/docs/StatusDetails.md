# StatusDetails

StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**causes** | [**List[StatusCause]**](StatusCause.md) | The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. | [optional] 
**group** | **str** | The group attribute of the resource associated with the status StatusReason. | [optional] 
**kind** | **str** | The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. | [optional] 
**name** | **str** | The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). | [optional] 
**retry_after_seconds** | **int** | If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. | [optional] 
**uid** | **str** | UID of the resource. (when there is a single resource which can be described). | [optional] 

## Example

```python
from openapi_client.models.status_details import StatusDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StatusDetails from a JSON string
status_details_instance = StatusDetails.from_json(json)
# print the JSON string representation of the object
print(StatusDetails.to_json())

# convert the object into a dict
status_details_dict = status_details_instance.to_dict()
# create an instance of StatusDetails from a dict
status_details_from_dict = StatusDetails.from_dict(status_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


