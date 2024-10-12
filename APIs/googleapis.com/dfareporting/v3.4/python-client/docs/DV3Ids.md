# DV3Ids

DV360 IDs related to the custom event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dv_campaign_id** | **str** | Campaign ID for DV360. | [optional] 
**dv_creative_id** | **str** | Creative ID for DV360. | [optional] 
**dv_insertion_order_id** | **str** | Insertion Order ID for DV360. | [optional] 
**dv_line_item_id** | **str** | Line Item ID for DV360. | [optional] 
**dv_site_id** | **str** | Site ID for DV360. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#dV3Ids\&quot;. | [optional] 

## Example

```python
from openapi_client.models.dv3_ids import DV3Ids

# TODO update the JSON string below
json = "{}"
# create an instance of DV3Ids from a JSON string
dv3_ids_instance = DV3Ids.from_json(json)
# print the JSON string representation of the object
print(DV3Ids.to_json())

# convert the object into a dict
dv3_ids_dict = dv3_ids_instance.to_dict()
# create an instance of DV3Ids from a dict
dv3_ids_from_dict = DV3Ids.from_dict(dv3_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


