# InternationalBusinessProfileCriteria

Object to supply the country code and company code whose details you wish to retrieve. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_code** | **str** | This is the company number returned in the search results  (InternationalBusinessSearchResponse.Companies.CompanyDTO[n].Code)  | [optional] 
**country** | **str** | The ISO 3166-1 alpha2 country code of country registry you wish to search. This is consistent for all countries except for:    - The United States which requires the state registry to query as well.     - As an example, for a Delaware query, the country code would be \&quot;US-DE\&quot;.     - A Texas query would use \&quot;US-TX\&quot;   - Canada, which also requires you to supply a territory code too.     - A Yukon query would use CA-YU, Manitoba would use CA-MB     - You can do an all jurisdiction search with CA-ALL   - United Arab Emirates (UAE)     - For Abu Dhabi, use \&quot;DI\&quot;      - For Dubai, use \&quot;DU\&quot;    See details here:     https://apidocs.frankiefinancial.com/docs/country-codes-for-international-business-queries  | 

## Example

```python
from openapi_client.models.international_business_profile_criteria import InternationalBusinessProfileCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of InternationalBusinessProfileCriteria from a JSON string
international_business_profile_criteria_instance = InternationalBusinessProfileCriteria.from_json(json)
# print the JSON string representation of the object
print(InternationalBusinessProfileCriteria.to_json())

# convert the object into a dict
international_business_profile_criteria_dict = international_business_profile_criteria_instance.to_dict()
# create an instance of InternationalBusinessProfileCriteria from a dict
international_business_profile_criteria_from_dict = InternationalBusinessProfileCriteria.from_dict(international_business_profile_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


