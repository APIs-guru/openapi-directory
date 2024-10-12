# PagespeedApiPagespeedResponseV4FormattedResults

Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The locale of the formattedResults, e.g. \&quot;en_US\&quot;. | [optional] 
**rule_results** | [**Dict[str, PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValue]**](PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValue.md) | Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_pagespeed_response_v4_formatted_results import PagespeedApiPagespeedResponseV4FormattedResults

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiPagespeedResponseV4FormattedResults from a JSON string
pagespeed_api_pagespeed_response_v4_formatted_results_instance = PagespeedApiPagespeedResponseV4FormattedResults.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiPagespeedResponseV4FormattedResults.to_json())

# convert the object into a dict
pagespeed_api_pagespeed_response_v4_formatted_results_dict = pagespeed_api_pagespeed_response_v4_formatted_results_instance.to_dict()
# create an instance of PagespeedApiPagespeedResponseV4FormattedResults from a dict
pagespeed_api_pagespeed_response_v4_formatted_results_from_dict = PagespeedApiPagespeedResponseV4FormattedResults.from_dict(pagespeed_api_pagespeed_response_v4_formatted_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


