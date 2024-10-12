# DriveList

A list of shared drives.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drives** | [**List[Drive]**](Drive.md) | The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#driveList\&quot;&#x60;. | [optional] [default to 'drive#driveList']
**next_page_token** | **str** | The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. | [optional] 

## Example

```python
from openapi_client.models.drive_list import DriveList

# TODO update the JSON string below
json = "{}"
# create an instance of DriveList from a JSON string
drive_list_instance = DriveList.from_json(json)
# print the JSON string representation of the object
print(DriveList.to_json())

# convert the object into a dict
drive_list_dict = drive_list_instance.to_dict()
# create an instance of DriveList from a dict
drive_list_from_dict = DriveList.from_dict(drive_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


