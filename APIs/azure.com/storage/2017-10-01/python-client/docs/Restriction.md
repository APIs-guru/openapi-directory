# Restriction

The restriction because of which SKU cannot be used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason_code** | **str** | The reason for the restriction. As of now this can be \&quot;QuotaId\&quot; or \&quot;NotAvailableForSubscription\&quot;. Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The \&quot;NotAvailableForSubscription\&quot; is related to capacity at DC. | [optional] 
**type** | **str** | The type of restrictions. As of now only possible value for this is location. | [optional] [readonly] 
**values** | **List[str]** | The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.restriction import Restriction

# TODO update the JSON string below
json = "{}"
# create an instance of Restriction from a JSON string
restriction_instance = Restriction.from_json(json)
# print the JSON string representation of the object
print(Restriction.to_json())

# convert the object into a dict
restriction_dict = restriction_instance.to_dict()
# create an instance of Restriction from a dict
restriction_from_dict = Restriction.from_dict(restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


