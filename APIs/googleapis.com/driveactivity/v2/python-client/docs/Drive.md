# Drive

Information about a shared drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the shared drive. The format is &#x60;COLLECTION_ID/DRIVE_ID&#x60;. Clients should not assume a specific collection ID for this resource name. | [optional] 
**root** | [**DriveItem**](DriveItem.md) |  | [optional] 
**title** | **str** | The title of the shared drive. | [optional] 

## Example

```python
from openapi_client.models.drive import Drive

# TODO update the JSON string below
json = "{}"
# create an instance of Drive from a JSON string
drive_instance = Drive.from_json(json)
# print the JSON string representation of the object
print(Drive.to_json())

# convert the object into a dict
drive_dict = drive_instance.to_dict()
# create an instance of Drive from a dict
drive_from_dict = Drive.from_dict(drive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


