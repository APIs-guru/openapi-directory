# DatafeedTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country where the items in the feed will be included in the search index, represented as a CLDR territory code. | [optional] 
**excluded_destinations** | **List[str]** | The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center). | [optional] 
**included_destinations** | **List[str]** | The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in &#x60;excludedDestinations&#x60;. List of supported destinations (if available to the account): - DisplayAds - Shopping - ShoppingActions - SurfacesAcrossGoogle  | [optional] 
**language** | **str** | The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for &#x60;targets[].country&#x60;. | [optional] 

## Example

```python
from openapi_client.models.datafeed_target import DatafeedTarget

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedTarget from a JSON string
datafeed_target_instance = DatafeedTarget.from_json(json)
# print the JSON string representation of the object
print(DatafeedTarget.to_json())

# convert the object into a dict
datafeed_target_dict = datafeed_target_instance.to_dict()
# create an instance of DatafeedTarget from a dict
datafeed_target_from_dict = DatafeedTarget.from_dict(datafeed_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


