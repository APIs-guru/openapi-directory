# Licensee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Licensee&#39;s first, second and third line address as well as post town concatenated by commas | 
**daily** | [**LicenseeAllOfDaily**](LicenseeAllOfDaily.md) |  | 
**name** | **str** | Licensee individual or organisation name | 
**postcode** | **str** | Licensee&#39;s postcode | 
**whitelist** | **List[str]** | A list of allowed URLs. An empty list means that whitelisting is disabled | 
**created_at** | **str** | Timestamp for when the licensee was created | 
**id** | **str** | An immutable ID provided for every licensee. Primarily used for paginated list requests.  | 
**key** | **str** | Uniquely identifies a licensee for a key.   Required to perform paid lookups for a specific licensee. Typically begins &#x60;sk_&#x60;.  | 

## Example

```python
from openapi_client.models.licensee import Licensee

# TODO update the JSON string below
json = "{}"
# create an instance of Licensee from a JSON string
licensee_instance = Licensee.from_json(json)
# print the JSON string representation of the object
print(Licensee.to_json())

# convert the object into a dict
licensee_dict = licensee_instance.to_dict()
# create an instance of Licensee from a dict
licensee_from_dict = Licensee.from_dict(licensee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


