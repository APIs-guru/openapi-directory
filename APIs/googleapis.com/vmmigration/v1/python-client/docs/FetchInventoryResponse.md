# FetchInventoryResponse

Response message for fetchInventory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_vms** | [**AwsVmsDetails**](AwsVmsDetails.md) |  | [optional] 
**azure_vms** | [**AzureVmsDetails**](AzureVmsDetails.md) |  | [optional] 
**next_page_token** | **str** | Output only. A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the source was last queried (if the result is from the cache). | [optional] [readonly] 
**vmware_vms** | [**VmwareVmsDetails**](VmwareVmsDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_inventory_response import FetchInventoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchInventoryResponse from a JSON string
fetch_inventory_response_instance = FetchInventoryResponse.from_json(json)
# print the JSON string representation of the object
print(FetchInventoryResponse.to_json())

# convert the object into a dict
fetch_inventory_response_dict = fetch_inventory_response_instance.to_dict()
# create an instance of FetchInventoryResponse from a dict
fetch_inventory_response_from_dict = FetchInventoryResponse.from_dict(fetch_inventory_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


