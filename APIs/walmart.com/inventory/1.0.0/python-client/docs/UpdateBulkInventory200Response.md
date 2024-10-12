# UpdateBulkInventory200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_attributes** | **object** |  | [optional] 
**errors** | **object** |  | [optional] 
**feed_id** | **str** | A unique ID, returned from the Bulk Upload API, used for tracking the feed file | [optional] 

## Example

```python
from openapi_client.models.update_bulk_inventory200_response import UpdateBulkInventory200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBulkInventory200Response from a JSON string
update_bulk_inventory200_response_instance = UpdateBulkInventory200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateBulkInventory200Response.to_json())

# convert the object into a dict
update_bulk_inventory200_response_dict = update_bulk_inventory200_response_instance.to_dict()
# create an instance of UpdateBulkInventory200Response from a dict
update_bulk_inventory200_response_from_dict = UpdateBulkInventory200Response.from_dict(update_bulk_inventory200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


