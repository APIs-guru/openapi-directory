# ShareList

Collection of all the shares on the Data Box Edge/Gateway device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] [readonly] 
**value** | [**List[Share]**](Share.md) | The list of shares. | [optional] [readonly] 

## Example

```python
from openapi_client.models.share_list import ShareList

# TODO update the JSON string below
json = "{}"
# create an instance of ShareList from a JSON string
share_list_instance = ShareList.from_json(json)
# print the JSON string representation of the object
print(ShareList.to_json())

# convert the object into a dict
share_list_dict = share_list_instance.to_dict()
# create an instance of ShareList from a dict
share_list_from_dict = ShareList.from_dict(share_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


