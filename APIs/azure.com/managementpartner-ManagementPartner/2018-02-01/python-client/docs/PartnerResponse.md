# PartnerResponse

this is the management partner operations response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **int** | Type of the partner | [optional] 
**id** | **str** | Identifier of the partner | [optional] [readonly] 
**name** | **str** | Name of the partner | [optional] [readonly] 
**properties** | [**PartnerProperties**](PartnerProperties.md) |  | [optional] 
**type** | **str** | Type of resource. \&quot;Microsoft.ManagementPartner/partners\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.partner_response import PartnerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerResponse from a JSON string
partner_response_instance = PartnerResponse.from_json(json)
# print the JSON string representation of the object
print(PartnerResponse.to_json())

# convert the object into a dict
partner_response_dict = partner_response_instance.to_dict()
# create an instance of PartnerResponse from a dict
partner_response_from_dict = PartnerResponse.from_dict(partner_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


