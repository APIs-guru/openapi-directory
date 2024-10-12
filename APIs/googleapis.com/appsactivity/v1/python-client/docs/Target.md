# Target

Information about the object modified by the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the target. For example, in Google Drive, this is the file or folder ID. | [optional] 
**mime_type** | **str** | The MIME type of the target. | [optional] 
**name** | **str** | The name of the target. For example, in Google Drive, this is the title of the file. | [optional] 

## Example

```python
from openapi_client.models.target import Target

# TODO update the JSON string below
json = "{}"
# create an instance of Target from a JSON string
target_instance = Target.from_json(json)
# print the JSON string representation of the object
print(Target.to_json())

# convert the object into a dict
target_dict = target_instance.to_dict()
# create an instance of Target from a dict
target_from_dict = Target.from_dict(target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


