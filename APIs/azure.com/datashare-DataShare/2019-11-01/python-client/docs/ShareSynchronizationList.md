# ShareSynchronizationList

List response for get ShareSynchronization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[ShareSynchronization]**](ShareSynchronization.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.share_synchronization_list import ShareSynchronizationList

# TODO update the JSON string below
json = "{}"
# create an instance of ShareSynchronizationList from a JSON string
share_synchronization_list_instance = ShareSynchronizationList.from_json(json)
# print the JSON string representation of the object
print(ShareSynchronizationList.to_json())

# convert the object into a dict
share_synchronization_list_dict = share_synchronization_list_instance.to_dict()
# create an instance of ShareSynchronizationList from a dict
share_synchronization_list_from_dict = ShareSynchronizationList.from_dict(share_synchronization_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


