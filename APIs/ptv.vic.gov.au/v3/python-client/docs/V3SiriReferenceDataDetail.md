# V3SiriReferenceDataDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_id** | **int** |  | [optional] 
**route_id** | **int** |  | [optional] 
**route_number_short** | **str** | Route number | [optional] 
**route_type** | **int** |  | [optional] 
**tracking_supplier_id** | **int** | Authority (Upstream SIRI provider) of a route and direction | [optional] 

## Example

```python
from openapi_client.models.v3_siri_reference_data_detail import V3SiriReferenceDataDetail

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriReferenceDataDetail from a JSON string
v3_siri_reference_data_detail_instance = V3SiriReferenceDataDetail.from_json(json)
# print the JSON string representation of the object
print(V3SiriReferenceDataDetail.to_json())

# convert the object into a dict
v3_siri_reference_data_detail_dict = v3_siri_reference_data_detail_instance.to_dict()
# create an instance of V3SiriReferenceDataDetail from a dict
v3_siri_reference_data_detail_from_dict = V3SiriReferenceDataDetail.from_dict(v3_siri_reference_data_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


