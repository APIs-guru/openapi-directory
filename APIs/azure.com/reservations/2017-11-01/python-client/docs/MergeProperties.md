# MergeProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sources** | **List[str]** | Format of the resource id should be /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} | [optional] 

## Example

```python
from openapi_client.models.merge_properties import MergeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MergeProperties from a JSON string
merge_properties_instance = MergeProperties.from_json(json)
# print the JSON string representation of the object
print(MergeProperties.to_json())

# convert the object into a dict
merge_properties_dict = merge_properties_instance.to_dict()
# create an instance of MergeProperties from a dict
merge_properties_from_dict = MergeProperties.from_dict(merge_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


