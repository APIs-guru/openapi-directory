# PartnerProperties

this is the management partner properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | This is the DateTime when the partner was created. | [optional] 
**object_id** | **str** | This is the object id. | [optional] 
**partner_id** | **str** | This is the partner id | [optional] 
**partner_name** | **str** | This is the partner name | [optional] 
**state** | [**ManagementPartnerState**](ManagementPartnerState.md) |  | [optional] 
**tenant_id** | **str** | This is the tenant id. | [optional] 
**updated_time** | **datetime** | This is the DateTime when the partner was updated. | [optional] 
**version** | **str** | This is the version. | [optional] 

## Example

```python
from openapi_client.models.partner_properties import PartnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerProperties from a JSON string
partner_properties_instance = PartnerProperties.from_json(json)
# print the JSON string representation of the object
print(PartnerProperties.to_json())

# convert the object into a dict
partner_properties_dict = partner_properties_instance.to_dict()
# create an instance of PartnerProperties from a dict
partner_properties_from_dict = PartnerProperties.from_dict(partner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


