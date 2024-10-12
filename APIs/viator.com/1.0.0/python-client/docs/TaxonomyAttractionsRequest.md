# TaxonomyAttractionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_id** | **int** | **unique numeric identifier** of the destination in which to search for attractions | [optional] 
**sort_order** | **str** | **sort order** in which to return the results that is *one of*:   * &#x60;\&quot;SEO_PUBLISHED_DATE_D\&quot;&#x60;: publish date (descending)   * &#x60;\&quot;SEO_PUBLISHED_DATE_A\&quot;&#x60;: publish date (ascending)   * &#x60;\&quot;SEO_REVIEW_AVG_RATING_D\&quot;&#x60;: traveler rating (high→low)   * &#x60;\&quot;SEO_REVIEW_AVG_RATING_A\&quot;&#x60;: traveler rating (low→high)   * &#x60;\&quot;SEO_ALPHABETICAL\&quot;&#x60;: alphabetical (A→Z)  | [optional] 
**top_x** | **str** | **start and end rows** to return in the format {start}-{end} - e.g. &#x60;&#39;1-10&#39;&#x60;, &#x60;&#39;11-20&#39;&#x60;  **Note**:  - the maximum number of rows per request is 100; therefore, &#x60;&#39;100-400&#39;&#x60; will return the same as &#x60;&#39;100-200&#39;&#x60; - if &#x60;topX&#x60; is not specified, the default is &#x60;&#39;1-100&#39;&#x60;  | [optional] 

## Example

```python
from openapi_client.models.taxonomy_attractions_request import TaxonomyAttractionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TaxonomyAttractionsRequest from a JSON string
taxonomy_attractions_request_instance = TaxonomyAttractionsRequest.from_json(json)
# print the JSON string representation of the object
print(TaxonomyAttractionsRequest.to_json())

# convert the object into a dict
taxonomy_attractions_request_dict = taxonomy_attractions_request_instance.to_dict()
# create an instance of TaxonomyAttractionsRequest from a dict
taxonomy_attractions_request_from_dict = TaxonomyAttractionsRequest.from_dict(taxonomy_attractions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


