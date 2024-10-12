# SearchQueriesNextPageInner

Custom search request metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of search results returned in this set. | [optional] 
**cr** | **str** | Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the &#x60;cr&#x60; parameter&#39;s value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document&#39;s URL. * The geographic location of the web server&#39;s IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter. | [optional] 
**cx** | **str** | The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**. | [optional] 
**date_restrict** | **str** | Restricts results to URLs based on date. Supported values include: * &#x60;d[number]&#x60;: requests results from the specified number of past days. * &#x60;w[number]&#x60;: requests results from the specified number of past weeks. * &#x60;m[number]&#x60;: requests results from the specified number of past months. * &#x60;y[number]&#x60;: requests results from the specified number of past years. | [optional] 
**disable_cn_tw_translation** | **str** | Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * &#x60;0&#x60;: enabled (default) * &#x60;1&#x60;: disabled | [optional] 
**exact_terms** | **str** | Identifies a phrase that all documents in the search results must contain. | [optional] 
**exclude_terms** | **str** | Identifies a word or phrase that should not appear in any documents in the search results. | [optional] 
**file_type** | **str** | Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (&#x60;pdf&#x60;) * Adobe PostScript (&#x60;ps&#x60;) * Lotus 1-2-3 (&#x60;wk1&#x60;, &#x60;wk2&#x60;, &#x60;wk3&#x60;, &#x60;wk4&#x60;, &#x60;wk5&#x60;, &#x60;wki&#x60;, &#x60;wks&#x60;, &#x60;wku&#x60;) * Lotus WordPro (&#x60;lwp&#x60;) * Macwrite (&#x60;mw&#x60;) * Microsoft Excel (&#x60;xls&#x60;) * Microsoft PowerPoint (&#x60;ppt&#x60;) * Microsoft Word (&#x60;doc&#x60;) * Microsoft Works (&#x60;wks&#x60;, &#x60;wps&#x60;, &#x60;wdb&#x60;) * Microsoft Write (&#x60;wri&#x60;) * Rich Text Format (&#x60;rtf&#x60;) * Shockwave Flash (&#x60;swf&#x60;) * Text (&#x60;ans&#x60;, &#x60;txt&#x60;). Additional filetypes may be added in the future. An up-to-date list can always be found in Google&#39;s [file type FAQ](https://support.google.com/webmasters/answer/35287). | [optional] 
**filter** | **str** | Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google&#39;s search results filters. Valid values for this parameter are: * &#x60;0&#x60;: Disabled * &#x60;1&#x60;: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results. | [optional] 
**gl** | **str** | Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a &#x60;gl&#x60; parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States. | [optional] 
**google_host** | **str** | Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited. | [optional] 
**high_range** | **str** | Specifies the ending value for a search range. Use &#x60;cse:lowRange&#x60; and &#x60;cse:highrange&#x60; to append an inclusive search range of &#x60;lowRange...highRange&#x60; to the query. | [optional] 
**hl** | **str** | Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. | [optional] 
**hq** | **str** | Appends the specified query terms to the query, as if they were combined with a logical &#x60;AND&#x60; operator. | [optional] 
**img_color_type** | **str** | Restricts results to images of a specified color type. Supported values are: * &#x60;mono&#x60; (black and white) * &#x60;gray&#x60; (grayscale) * &#x60;color&#x60; (color) | [optional] 
**img_dominant_color** | **str** | Restricts results to images with a specific dominant color. Supported values are: * &#x60;red&#x60; * &#x60;orange&#x60; * &#x60;yellow&#x60; * &#x60;green&#x60; * &#x60;teal&#x60; * &#x60;blue&#x60; * &#x60;purple&#x60; * &#x60;pink&#x60; * &#x60;white&#x60; * &#x60;gray&#x60; * &#x60;black&#x60; * &#x60;brown&#x60; | [optional] 
**img_size** | **str** | Restricts results to images of a specified size. Supported values are: * &#x60;icon&#x60; (small) * &#x60;small | medium | large | xlarge&#x60; (medium) * &#x60;xxlarge&#x60; (large) * &#x60;huge&#x60; (extra-large) | [optional] 
**img_type** | **str** | Restricts results to images of a specified type. Supported values are: * &#x60;clipart&#x60; (Clip art) * &#x60;face&#x60; (Face) * &#x60;lineart&#x60; (Line drawing) * &#x60;photo&#x60; (Photo) * &#x60;animated&#x60; (Animated) * &#x60;stock&#x60; (Stock) | [optional] 
**input_encoding** | **str** | The character encoding supported for search requests. | [optional] 
**language** | **str** | The language of the search results. | [optional] 
**link_site** | **str** | Specifies that all results should contain a link to a specific URL. | [optional] 
**low_range** | **str** | Specifies the starting value for a search range. Use &#x60;cse:lowRange&#x60; and &#x60;cse:highrange&#x60; to append an inclusive search range of &#x60;lowRange...highRange&#x60; to the query. | [optional] 
**or_terms** | **str** | Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query. | [optional] 
**output_encoding** | **str** | The character encoding supported for search results. | [optional] 
**related_site** | **str** | Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. | [optional] 
**rights** | **str** | Filters based on licensing. Supported values include: * &#x60;cc_publicdomain&#x60; * &#x60;cc_attribute&#x60; * &#x60;cc_sharealike&#x60; * &#x60;cc_noncommercial&#x60; * &#x60;cc_nonderived&#x60; | [optional] 
**safe** | **str** | Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * &#x60;\&quot;off\&quot;&#x60;: Disable SafeSearch * &#x60;\&quot;active\&quot;&#x60;: Enable SafeSearch | [optional] 
**search_terms** | **str** | The search terms entered by the user. | [optional] 
**search_type** | **str** | Allowed values are &#x60;web&#x60; or &#x60;image&#x60;. If unspecified, results are limited to webpages. | [optional] 
**site_search** | **str** | Restricts results to URLs from a specified site. | [optional] 
**site_search_filter** | **str** | Specifies whether to include or exclude results from the site named in the &#x60;sitesearch&#x60; parameter. Supported values are: * &#x60;i&#x60;: include content from site * &#x60;e&#x60;: exclude content from site | [optional] 
**sort** | **str** | Specifies that results should be sorted according to the specified expression. For example, sort by date. | [optional] 
**start_index** | **int** | The index of the current set of search results into the total set of results, where the index of the first result is 1. | [optional] 
**start_page** | **int** | The page number of this set of results, where the page length is set by the &#x60;count&#x60; property. | [optional] 
**title** | **str** | A description of the query. | [optional] 
**total_results** | **str** | Estimated number of total search results. May not be accurate. | [optional] 

## Example

```python
from openapi_client.models.search_queries_next_page_inner import SearchQueriesNextPageInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchQueriesNextPageInner from a JSON string
search_queries_next_page_inner_instance = SearchQueriesNextPageInner.from_json(json)
# print the JSON string representation of the object
print(SearchQueriesNextPageInner.to_json())

# convert the object into a dict
search_queries_next_page_inner_dict = search_queries_next_page_inner_instance.to_dict()
# create an instance of SearchQueriesNextPageInner from a dict
search_queries_next_page_inner_from_dict = SearchQueriesNextPageInner.from_dict(search_queries_next_page_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


