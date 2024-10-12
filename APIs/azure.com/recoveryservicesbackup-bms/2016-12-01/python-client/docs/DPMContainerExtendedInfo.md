# DPMContainerExtendedInfo

Additional information of the DPMContainer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_refreshed_at** | **datetime** | Last refresh time of the DPMContainer. | [optional] 

## Example

```python
from openapi_client.models.dpm_container_extended_info import DPMContainerExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DPMContainerExtendedInfo from a JSON string
dpm_container_extended_info_instance = DPMContainerExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(DPMContainerExtendedInfo.to_json())

# convert the object into a dict
dpm_container_extended_info_dict = dpm_container_extended_info_instance.to_dict()
# create an instance of DPMContainerExtendedInfo from a dict
dpm_container_extended_info_from_dict = DPMContainerExtendedInfo.from_dict(dpm_container_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


