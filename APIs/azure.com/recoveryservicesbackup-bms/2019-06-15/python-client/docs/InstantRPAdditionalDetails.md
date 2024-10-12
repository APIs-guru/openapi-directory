# InstantRPAdditionalDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_backup_rg_name_prefix** | **str** |  | [optional] 
**azure_backup_rg_name_suffix** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.instant_rp_additional_details import InstantRPAdditionalDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InstantRPAdditionalDetails from a JSON string
instant_rp_additional_details_instance = InstantRPAdditionalDetails.from_json(json)
# print the JSON string representation of the object
print(InstantRPAdditionalDetails.to_json())

# convert the object into a dict
instant_rp_additional_details_dict = instant_rp_additional_details_instance.to_dict()
# create an instance of InstantRPAdditionalDetails from a dict
instant_rp_additional_details_from_dict = InstantRPAdditionalDetails.from_dict(instant_rp_additional_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


