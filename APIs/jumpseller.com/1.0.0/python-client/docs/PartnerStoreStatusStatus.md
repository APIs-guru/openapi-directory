# PartnerStoreStatusStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Message describing the current creation status. | [optional] 
**percentage** | **str** | Percentage of the creation process that was already completed. | [optional] 

## Example

```python
from openapi_client.models.partner_store_status_status import PartnerStoreStatusStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerStoreStatusStatus from a JSON string
partner_store_status_status_instance = PartnerStoreStatusStatus.from_json(json)
# print the JSON string representation of the object
print(PartnerStoreStatusStatus.to_json())

# convert the object into a dict
partner_store_status_status_dict = partner_store_status_status_instance.to_dict()
# create an instance of PartnerStoreStatusStatus from a dict
partner_store_status_status_from_dict = PartnerStoreStatusStatus.from_dict(partner_store_status_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


