# StatusPartial

Status Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attrs** | **object** |  | [optional] 
**message** | **str** |  | [optional] 
**severity** | **int** | We are using syslog severity levels: 0 &#x3D; Emergency, 1 &#x3D; Alert, 2 &#x3D; Critical, 3 &#x3D; Error, 4 &#x3D; Warning, 5 &#x3D; Notice, 6 &#x3D; Informational, 7 &#x3D; Debug.  | [optional] 
**tag** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.status_partial import StatusPartial

# TODO update the JSON string below
json = "{}"
# create an instance of StatusPartial from a JSON string
status_partial_instance = StatusPartial.from_json(json)
# print the JSON string representation of the object
print(StatusPartial.to_json())

# convert the object into a dict
status_partial_dict = status_partial_instance.to_dict()
# create an instance of StatusPartial from a dict
status_partial_from_dict = StatusPartial.from_dict(status_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


