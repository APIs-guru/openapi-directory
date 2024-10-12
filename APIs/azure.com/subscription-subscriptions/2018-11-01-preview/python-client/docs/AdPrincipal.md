# AdPrincipal

Active Directory Principal who’ll get owner access on the new subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | Object id of the Principal | 

## Example

```python
from openapi_client.models.ad_principal import AdPrincipal

# TODO update the JSON string below
json = "{}"
# create an instance of AdPrincipal from a JSON string
ad_principal_instance = AdPrincipal.from_json(json)
# print the JSON string representation of the object
print(AdPrincipal.to_json())

# convert the object into a dict
ad_principal_dict = ad_principal_instance.to_dict()
# create an instance of AdPrincipal from a dict
ad_principal_from_dict = AdPrincipal.from_dict(ad_principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


