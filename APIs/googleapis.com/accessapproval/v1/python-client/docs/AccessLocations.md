# AccessLocations

Home office and physical location of the principal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_office_country** | **str** | The \&quot;home office\&quot; location of the principal. A two-letter country code (ISO 3166-1 alpha-2), such as \&quot;US\&quot;, \&quot;DE\&quot; or \&quot;GB\&quot; or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location | [optional] 
**principal_physical_location_country** | **str** | Physical location of the principal at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as \&quot;US\&quot;, \&quot;DE\&quot; or \&quot;GB\&quot; or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location | [optional] 

## Example

```python
from openapi_client.models.access_locations import AccessLocations

# TODO update the JSON string below
json = "{}"
# create an instance of AccessLocations from a JSON string
access_locations_instance = AccessLocations.from_json(json)
# print the JSON string representation of the object
print(AccessLocations.to_json())

# convert the object into a dict
access_locations_dict = access_locations_instance.to_dict()
# create an instance of AccessLocations from a dict
access_locations_from_dict = AccessLocations.from_dict(access_locations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


