# Headers

A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | [**List[LocationIdSet]**](LocationIdSet.md) | A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set. | [optional] 
**number_of_items** | **List[str]** | A list of inclusive number of items upper bounds. The last value can be &#x60;\&quot;infinity\&quot;&#x60;. For example &#x60;[\&quot;10\&quot;, \&quot;50\&quot;, \&quot;infinity\&quot;]&#x60; represents the headers \&quot;&lt;&#x3D; 10 items\&quot;, \&quot;&lt;&#x3D; 50 items\&quot;, and \&quot;&gt; 50 items\&quot;. Must be non-empty. Can only be set if all other fields are not set. | [optional] 
**postal_code_group_names** | **List[str]** | A list of postal group names. The last value can be &#x60;\&quot;all other locations\&quot;&#x60;. Example: &#x60;[\&quot;zone 1\&quot;, \&quot;zone 2\&quot;, \&quot;all other locations\&quot;]&#x60;. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set. | [optional] 
**prices** | [**List[Price]**](Price.md) | A list of inclusive order price upper bounds. The last price&#39;s value can be &#x60;\&quot;infinity\&quot;&#x60;. For example &#x60;[{\&quot;value\&quot;: \&quot;10\&quot;, \&quot;currency\&quot;: \&quot;USD\&quot;}, {\&quot;value\&quot;: \&quot;500\&quot;, \&quot;currency\&quot;: \&quot;USD\&quot;}, {\&quot;value\&quot;: \&quot;infinity\&quot;, \&quot;currency\&quot;: \&quot;USD\&quot;}]&#x60; represents the headers \&quot;&lt;&#x3D; $10\&quot;, \&quot;&lt;&#x3D; $500\&quot;, and \&quot;&gt; $500\&quot;. All prices within a service must have the same currency. Must be non-empty. Can only be set if all other fields are not set. | [optional] 
**weights** | [**List[Weight]**](Weight.md) | A list of inclusive order weight upper bounds. The last weight&#39;s value can be &#x60;\&quot;infinity\&quot;&#x60;. For example &#x60;[{\&quot;value\&quot;: \&quot;10\&quot;, \&quot;unit\&quot;: \&quot;kg\&quot;}, {\&quot;value\&quot;: \&quot;50\&quot;, \&quot;unit\&quot;: \&quot;kg\&quot;}, {\&quot;value\&quot;: \&quot;infinity\&quot;, \&quot;unit\&quot;: \&quot;kg\&quot;}]&#x60; represents the headers \&quot;&lt;&#x3D; 10kg\&quot;, \&quot;&lt;&#x3D; 50kg\&quot;, and \&quot;&gt; 50kg\&quot;. All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set. | [optional] 

## Example

```python
from openapi_client.models.headers import Headers

# TODO update the JSON string below
json = "{}"
# create an instance of Headers from a JSON string
headers_instance = Headers.from_json(json)
# print the JSON string representation of the object
print(Headers.to_json())

# convert the object into a dict
headers_dict = headers_instance.to_dict()
# create an instance of Headers from a dict
headers_from_dict = Headers.from_dict(headers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


