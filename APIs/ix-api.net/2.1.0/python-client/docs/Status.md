# Status


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attrs** | **object** |  | 
**message** | **str** |  | 
**severity** | **int** | We are using syslog severity levels: 0 &#x3D; Emergency, 1 &#x3D; Alert, 2 &#x3D; Critical, 3 &#x3D; Error, 4 &#x3D; Warning, 5 &#x3D; Notice, 6 &#x3D; Informational, 7 &#x3D; Debug.  | 
**tag** | **str** |  | 
**timestamp** | **datetime** |  | 

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


