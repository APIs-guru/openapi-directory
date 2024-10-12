# CustomDomain

The custom domain assigned to this storage account. This can be set via Update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the custom domain name. Name is the CNAME source. | [optional] 
**use_sub_domain_name** | **bool** | Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates | [optional] 

## Example

```python
from openapi_client.models.custom_domain import CustomDomain

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDomain from a JSON string
custom_domain_instance = CustomDomain.from_json(json)
# print the JSON string representation of the object
print(CustomDomain.to_json())

# convert the object into a dict
custom_domain_dict = custom_domain_instance.to_dict()
# create an instance of CustomDomain from a dict
custom_domain_from_dict = CustomDomain.from_dict(custom_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


