# OrganizationAddress

Organization`s address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**post_code** | **int** |  | [optional] 
**region** | **str** | Countryâ€™s region:&lt;br&gt;    * Africa   * Americas   * Asia   * Europe   * Oceania   * Polar  | [optional] 
**street** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.organization_address import OrganizationAddress

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationAddress from a JSON string
organization_address_instance = OrganizationAddress.from_json(json)
# print the JSON string representation of the object
print(OrganizationAddress.to_json())

# convert the object into a dict
organization_address_dict = organization_address_instance.to_dict()
# create an instance of OrganizationAddress from a dict
organization_address_from_dict = OrganizationAddress.from_dict(organization_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


