# RemoteObject

The linked item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | [**Icon**](Icon.md) | Details of the icon for the item. If no icon is defined, the default link icon is used in Jira. | [optional] 
**status** | [**Status**](Status.md) | The status of the item. | [optional] 
**summary** | **str** | The summary details of the item. | [optional] 
**title** | **str** | The title of the item. | 
**url** | **str** | The URL of the item. | 

## Example

```python
from openapi_client.models.remote_object import RemoteObject

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteObject from a JSON string
remote_object_instance = RemoteObject.from_json(json)
# print the JSON string representation of the object
print(RemoteObject.to_json())

# convert the object into a dict
remote_object_dict = remote_object_instance.to_dict()
# create an instance of RemoteObject from a dict
remote_object_from_dict = RemoteObject.from_dict(remote_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


