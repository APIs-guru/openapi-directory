# Change

A change to a file or shared drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_type** | **str** | The type of the change. Possible values are &#x60;file&#x60; and &#x60;drive&#x60;. | [optional] 
**drive** | [**Drive**](Drive.md) |  | [optional] 
**drive_id** | **str** | The ID of the shared drive associated with this change. | [optional] 
**file** | [**File**](File.md) |  | [optional] 
**file_id** | **str** | The ID of the file which has changed. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#change\&quot;&#x60;. | [optional] [default to 'drive#change']
**removed** | **bool** | Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. | [optional] 
**team_drive** | [**TeamDrive**](TeamDrive.md) |  | [optional] 
**team_drive_id** | **str** | Deprecated: Use &#x60;driveId&#x60; instead. | [optional] 
**time** | **datetime** | The time of this change (RFC 3339 date-time). | [optional] 
**type** | **str** | Deprecated: Use &#x60;changeType&#x60; instead. | [optional] 

## Example

```python
from openapi_client.models.change import Change

# TODO update the JSON string below
json = "{}"
# create an instance of Change from a JSON string
change_instance = Change.from_json(json)
# print the JSON string representation of the object
print(Change.to_json())

# convert the object into a dict
change_dict = change_instance.to_dict()
# create an instance of Change from a dict
change_from_dict = Change.from_dict(change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


