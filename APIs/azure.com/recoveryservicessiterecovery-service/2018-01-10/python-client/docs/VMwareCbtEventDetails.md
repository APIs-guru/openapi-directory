# VMwareCbtEventDetails

Event details for VMwareCbt provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_item_name** | **str** | The migration item name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.v_mware_cbt_event_details import VMwareCbtEventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtEventDetails from a JSON string
v_mware_cbt_event_details_instance = VMwareCbtEventDetails.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtEventDetails.to_json())

# convert the object into a dict
v_mware_cbt_event_details_dict = v_mware_cbt_event_details_instance.to_dict()
# create an instance of VMwareCbtEventDetails from a dict
v_mware_cbt_event_details_from_dict = VMwareCbtEventDetails.from_dict(v_mware_cbt_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


