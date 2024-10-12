# PartnerError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **bool** | True when an error occurs. | [optional] 
**var_field** | **str** | Field causing the error. | [optional] 
**message** | **str** | Message describing the error. | [optional] 

## Example

```python
from openapi_client.models.partner_error import PartnerError

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerError from a JSON string
partner_error_instance = PartnerError.from_json(json)
# print the JSON string representation of the object
print(PartnerError.to_json())

# convert the object into a dict
partner_error_dict = partner_error_instance.to_dict()
# create an instance of PartnerError from a dict
partner_error_from_dict = PartnerError.from_dict(partner_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


