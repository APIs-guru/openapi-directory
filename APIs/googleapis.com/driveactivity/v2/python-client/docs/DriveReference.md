# DriveReference

A lightweight reference to a shared drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the shared drive. The format is &#x60;COLLECTION_ID/DRIVE_ID&#x60;. Clients should not assume a specific collection ID for this resource name. | [optional] 
**title** | **str** | The title of the shared drive. | [optional] 

## Example

```python
from openapi_client.models.drive_reference import DriveReference

# TODO update the JSON string below
json = "{}"
# create an instance of DriveReference from a JSON string
drive_reference_instance = DriveReference.from_json(json)
# print the JSON string representation of the object
print(DriveReference.to_json())

# convert the object into a dict
drive_reference_dict = drive_reference_instance.to_dict()
# create an instance of DriveReference from a dict
drive_reference_from_dict = DriveReference.from_dict(drive_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


