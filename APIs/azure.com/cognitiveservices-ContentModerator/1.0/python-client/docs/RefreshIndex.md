# RefreshIndex

Refresh Index Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_info** | **List[Dict[str, str]]** | Advanced info list. | [optional] 
**content_source_id** | **str** | Content source Id. | [optional] 
**is_update_success** | **bool** | Update success status. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**tracking_id** | **str** | Tracking Id. | [optional] 

## Example

```python
from openapi_client.models.refresh_index import RefreshIndex

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshIndex from a JSON string
refresh_index_instance = RefreshIndex.from_json(json)
# print the JSON string representation of the object
print(RefreshIndex.to_json())

# convert the object into a dict
refresh_index_dict = refresh_index_instance.to_dict()
# create an instance of RefreshIndex from a dict
refresh_index_from_dict = RefreshIndex.from_dict(refresh_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


