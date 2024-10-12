# EditGuaranteedOrderReadAccessorsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**read_access_inherited** | **bool** | Whether all advertisers of read_write_partner_id have read access to the guaranteed order. | [optional] 
**read_advertiser_ids** | **List[str]** | The IDs of advertisers with read access to the guaranteed order. | [optional] 

## Example

```python
from openapi_client.models.edit_guaranteed_order_read_accessors_response import EditGuaranteedOrderReadAccessorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EditGuaranteedOrderReadAccessorsResponse from a JSON string
edit_guaranteed_order_read_accessors_response_instance = EditGuaranteedOrderReadAccessorsResponse.from_json(json)
# print the JSON string representation of the object
print(EditGuaranteedOrderReadAccessorsResponse.to_json())

# convert the object into a dict
edit_guaranteed_order_read_accessors_response_dict = edit_guaranteed_order_read_accessors_response_instance.to_dict()
# create an instance of EditGuaranteedOrderReadAccessorsResponse from a dict
edit_guaranteed_order_read_accessors_response_from_dict = EditGuaranteedOrderReadAccessorsResponse.from_dict(edit_guaranteed_order_read_accessors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


