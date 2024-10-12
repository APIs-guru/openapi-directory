# InternationalBusinessSearchCriteria

Object to supply the country code, business name and number, along with an optional registry parameter to search for. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The ISO 3166-1 alpha2 country code of country registry you wish to search. This is consistent for all countries except for:    - The United States which requires the state registry to query as well.     - As an example, for a Delaware query, the country code would be \&quot;US-DE\&quot;.     - A Texas query would use \&quot;US-TX\&quot;   - Canada, which also requires you to supply a territory code too.     - A Yukon query would use CA-YU, Manitoba would use CA-MB     - You can do an all jurisdiction search with CA-ALL   - United Arab Emirates (UAE)     - For Abu Dhabi, use \&quot;DI\&quot;      - For Dubai, use \&quot;DU\&quot;    See details here:     https://apidocs.frankiefinancial.com/docs/country-codes-for-international-business-queries  | 
**organisation_name** | **str** | Name or name fragment you wish to search for.   Note: The less you supply, the more, but less relevant results will be returned.  CRITICAL NOTE: This is *NOT* to be used as a progressive search function.  You must supply at least one of organisation_name and/or organisation_number. If you supply both, a name search will be conducted first, then the number will be checked against the result set and any remaining results returned.  | [optional] 
**organisation_number** | **str** | The business number you wish to search on. This should be a unique corporate identifier as per the country registry you&#39;re searching.  | [optional] 

## Example

```python
from openapi_client.models.international_business_search_criteria import InternationalBusinessSearchCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of InternationalBusinessSearchCriteria from a JSON string
international_business_search_criteria_instance = InternationalBusinessSearchCriteria.from_json(json)
# print the JSON string representation of the object
print(InternationalBusinessSearchCriteria.to_json())

# convert the object into a dict
international_business_search_criteria_dict = international_business_search_criteria_instance.to_dict()
# create an instance of InternationalBusinessSearchCriteria from a dict
international_business_search_criteria_from_dict = InternationalBusinessSearchCriteria.from_dict(international_business_search_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


