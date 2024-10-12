# AccessMode

An object defining what a not-logged-in visitor can do with the share contents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | **bool** | Whether share allows visitors to delete contents | [optional] 
**download** | **bool** | Whether share allows visitors to download | [optional] 
**modify** | **bool** | Whether share allows visitors to rename or move contents. | [optional] 
**upload** | **bool** | Whether share allows visitors to upload | [optional] 

## Example

```python
from openapi_client.models.access_mode import AccessMode

# TODO update the JSON string below
json = "{}"
# create an instance of AccessMode from a JSON string
access_mode_instance = AccessMode.from_json(json)
# print the JSON string representation of the object
print(AccessMode.to_json())

# convert the object into a dict
access_mode_dict = access_mode_instance.to_dict()
# create an instance of AccessMode from a dict
access_mode_from_dict = AccessMode.from_dict(access_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


