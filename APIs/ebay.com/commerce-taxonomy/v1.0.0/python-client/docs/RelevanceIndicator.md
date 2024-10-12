# RelevanceIndicator

The relevance of this aspect. This field is returned if eBay has data on how many searches have been performed for listings in the category using this item aspect.<br /><br /><span class=\"tablenote\"> <strong>Note:</strong> This container is restricted to applications that have been granted permission to access this feature. You must submit an <a href=\"https://developer.ebay.com/my/support/tickets?tab=app-check\">App Check ticket</a> to request this access. In the App Check form, add a note to the <b>Application Title/Summary</b> and/or <b>Application Details</b> fields that you want access to 'Buyer Demand Data' in the Taxonomy API.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_count** | **int** | The number of recent searches (based on 30 days of data) for the aspect. | [optional] 

## Example

```python
from openapi_client.models.relevance_indicator import RelevanceIndicator

# TODO update the JSON string below
json = "{}"
# create an instance of RelevanceIndicator from a JSON string
relevance_indicator_instance = RelevanceIndicator.from_json(json)
# print the JSON string representation of the object
print(RelevanceIndicator.to_json())

# convert the object into a dict
relevance_indicator_dict = relevance_indicator_instance.to_dict()
# create an instance of RelevanceIndicator from a dict
relevance_indicator_from_dict = RelevanceIndicator.from_dict(relevance_indicator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


