# SellingPrivileges

This type is used by the base response of the <b>getPrivileges</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**seller_registration_completed** | **bool** | If this field is returned as &lt;code&gt;true&lt;/code&gt;, the seller&#39;s registration is completed. If this field is returned as &lt;code&gt;false&lt;/code&gt;, the registration process is not complete. | [optional] 
**selling_limit** | [**SellingLimit**](SellingLimit.md) |  | [optional] 

## Example

```python
from openapi_client.models.selling_privileges import SellingPrivileges

# TODO update the JSON string below
json = "{}"
# create an instance of SellingPrivileges from a JSON string
selling_privileges_instance = SellingPrivileges.from_json(json)
# print the JSON string representation of the object
print(SellingPrivileges.to_json())

# convert the object into a dict
selling_privileges_dict = selling_privileges_instance.to_dict()
# create an instance of SellingPrivileges from a dict
selling_privileges_from_dict = SellingPrivileges.from_dict(selling_privileges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


