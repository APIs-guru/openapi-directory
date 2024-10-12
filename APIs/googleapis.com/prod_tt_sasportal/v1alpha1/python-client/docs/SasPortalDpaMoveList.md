# SasPortalDpaMoveList

An entry in a DPA's move list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dpa_id** | **str** | The ID of the DPA. | [optional] 
**frequency_range** | [**SasPortalFrequencyRange**](SasPortalFrequencyRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.sas_portal_dpa_move_list import SasPortalDpaMoveList

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalDpaMoveList from a JSON string
sas_portal_dpa_move_list_instance = SasPortalDpaMoveList.from_json(json)
# print the JSON string representation of the object
print(SasPortalDpaMoveList.to_json())

# convert the object into a dict
sas_portal_dpa_move_list_dict = sas_portal_dpa_move_list_instance.to_dict()
# create an instance of SasPortalDpaMoveList from a dict
sas_portal_dpa_move_list_from_dict = SasPortalDpaMoveList.from_dict(sas_portal_dpa_move_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


