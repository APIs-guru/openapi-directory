# EditGuaranteedOrderReadAccessorsRequest

Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_advertisers** | **List[str]** | The advertisers to add as read accessors to the guaranteed order. | [optional] 
**partner_id** | **str** | Required. The partner context in which the change is being made. | [optional] 
**read_access_inherited** | **bool** | Whether to give all advertisers of the read/write accessor partner read access to the guaranteed order. Only applicable if read_write_partner_id is set in the guaranteed order. | [optional] 
**removed_advertisers** | **List[str]** | The advertisers to remove as read accessors to the guaranteed order. | [optional] 

## Example

```python
from openapi_client.models.edit_guaranteed_order_read_accessors_request import EditGuaranteedOrderReadAccessorsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditGuaranteedOrderReadAccessorsRequest from a JSON string
edit_guaranteed_order_read_accessors_request_instance = EditGuaranteedOrderReadAccessorsRequest.from_json(json)
# print the JSON string representation of the object
print(EditGuaranteedOrderReadAccessorsRequest.to_json())

# convert the object into a dict
edit_guaranteed_order_read_accessors_request_dict = edit_guaranteed_order_read_accessors_request_instance.to_dict()
# create an instance of EditGuaranteedOrderReadAccessorsRequest from a dict
edit_guaranteed_order_read_accessors_request_from_dict = EditGuaranteedOrderReadAccessorsRequest.from_dict(edit_guaranteed_order_read_accessors_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


