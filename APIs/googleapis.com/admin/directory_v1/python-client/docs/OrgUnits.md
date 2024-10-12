# OrgUnits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | The type of the API resource. For Org Unit resources, the type is &#x60;admin#directory#orgUnits&#x60;. | [optional] [default to 'admin#directory#orgUnits']
**organization_units** | [**List[OrgUnit]**](OrgUnit.md) | A list of organizational unit objects. | [optional] 

## Example

```python
from openapi_client.models.org_units import OrgUnits

# TODO update the JSON string below
json = "{}"
# create an instance of OrgUnits from a JSON string
org_units_instance = OrgUnits.from_json(json)
# print the JSON string representation of the object
print(OrgUnits.to_json())

# convert the object into a dict
org_units_dict = org_units_instance.to_dict()
# create an instance of OrgUnits from a dict
org_units_from_dict = OrgUnits.from_dict(org_units_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


