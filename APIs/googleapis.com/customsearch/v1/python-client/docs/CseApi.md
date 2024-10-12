# openapi_client.CseApi

All URIs are relative to *https://customsearch.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_cse_list**](CseApi.md#search_cse_list) | **GET** /customsearch/v1 | 
[**search_cse_siterestrict_list**](CseApi.md#search_cse_siterestrict_list) | **GET** /customsearch/v1/siterestrict | 


# **search_cse_list**
> Search search_cse_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, c2coff=c2coff, cr=cr, cx=cx, date_restrict=date_restrict, exact_terms=exact_terms, exclude_terms=exclude_terms, file_type=file_type, filter=filter, gl=gl, googlehost=googlehost, high_range=high_range, hl=hl, hq=hq, img_color_type=img_color_type, img_dominant_color=img_dominant_color, img_size=img_size, img_type=img_type, link_site=link_site, low_range=low_range, lr=lr, num=num, or_terms=or_terms, q=q, related_site=related_site, rights=rights, safe=safe, search_type=search_type, site_search=site_search, site_search_filter=site_search_filter, sort=sort, start=start)



Returns metadata about the search performed, metadata about the engine used for the search, and the search results.

### Example


```python
import openapi_client
from openapi_client.models.search import Search
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://customsearch.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CseApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    c2coff = 'c2coff_example' # str | Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default) (optional)
    cr = 'cr_example' # str | Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter. (optional)
    cx = 'cx_example' # str | The Programmable Search Engine ID to use for this request. (optional)
    date_restrict = 'date_restrict_example' # str | Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. (optional)
    exact_terms = 'exact_terms_example' # str | Identifies a phrase that all documents in the search results must contain. (optional)
    exclude_terms = 'exclude_terms_example' # str | Identifies a word or phrase that should not appear in any documents in the search results. (optional)
    file_type = 'file_type_example' # str | Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287). (optional)
    filter = 'filter_example' # str | Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter. (optional)
    gl = 'gl_example' # str | Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States. (optional)
    googlehost = 'googlehost_example' # str | **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search. (optional)
    high_range = 'high_range_example' # str | Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. (optional)
    hl = 'hl_example' # str | Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. (optional)
    hq = 'hq_example' # str | Appends the specified query terms to the query, as if they were combined with a logical AND operator. (optional)
    img_color_type = 'img_color_type_example' # str | Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `\"color\"` * `\"gray\"` * `\"mono\"`: black and white * `\"trans\"`: transparent background (optional)
    img_dominant_color = 'img_dominant_color_example' # str | Returns images of a specific dominant color. Acceptable values are: * `\"black\"` * `\"blue\"` * `\"brown\"` * `\"gray\"` * `\"green\"` * `\"orange\"` * `\"pink\"` * `\"purple\"` * `\"red\"` * `\"teal\"` * `\"white\"` * `\"yellow\"` (optional)
    img_size = 'img_size_example' # str | Returns images of a specified size. Acceptable values are: * `\"huge\"` * `\"icon\"` * `\"large\"` * `\"medium\"` * `\"small\"` * `\"xlarge\"` * `\"xxlarge\"` (optional)
    img_type = 'img_type_example' # str | Returns images of a type. Acceptable values are: * `\"clipart\"` * `\"face\"` * `\"lineart\"` * `\"stock\"` * `\"photo\"` * `\"animated\"` (optional)
    link_site = 'link_site_example' # str | Specifies that all search results should contain a link to a particular URL. (optional)
    low_range = 'low_range_example' # str | Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. (optional)
    lr = 'lr_example' # str | Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `\"lang_ar\"`: Arabic * `\"lang_bg\"`: Bulgarian * `\"lang_ca\"`: Catalan * `\"lang_cs\"`: Czech * `\"lang_da\"`: Danish * `\"lang_de\"`: German * `\"lang_el\"`: Greek * `\"lang_en\"`: English * `\"lang_es\"`: Spanish * `\"lang_et\"`: Estonian * `\"lang_fi\"`: Finnish * `\"lang_fr\"`: French * `\"lang_hr\"`: Croatian * `\"lang_hu\"`: Hungarian * `\"lang_id\"`: Indonesian * `\"lang_is\"`: Icelandic * `\"lang_it\"`: Italian * `\"lang_iw\"`: Hebrew * `\"lang_ja\"`: Japanese * `\"lang_ko\"`: Korean * `\"lang_lt\"`: Lithuanian * `\"lang_lv\"`: Latvian * `\"lang_nl\"`: Dutch * `\"lang_no\"`: Norwegian * `\"lang_pl\"`: Polish * `\"lang_pt\"`: Portuguese * `\"lang_ro\"`: Romanian * `\"lang_ru\"`: Russian * `\"lang_sk\"`: Slovak * `\"lang_sl\"`: Slovenian * `\"lang_sr\"`: Serbian * `\"lang_sv\"`: Swedish * `\"lang_tr\"`: Turkish * `\"lang_zh-CN\"`: Chinese (Simplified) * `\"lang_zh-TW\"`: Chinese (Traditional) (optional)
    num = 56 # int | Number of search results to return. * Valid values are integers between 1 and 10, inclusive. (optional)
    or_terms = 'or_terms_example' # str | Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. (optional)
    q = 'q_example' # str | Query (optional)
    related_site = 'related_site_example' # str | Deprecated. (optional)
    rights = 'rights_example' # str | Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration). (optional)
    safe = 'safe_example' # str | Search safety level. Acceptable values are: * `\"active\"`: Enables SafeSearch filtering. * `\"off\"`: Disables SafeSearch filtering. (default) (optional)
    search_type = 'search_type_example' # str | Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `\"image\"`: custom image search. (optional)
    site_search = 'site_search_example' # str | Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below). (optional)
    site_search_filter = 'site_search_filter_example' # str | Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `\"e\"`: exclude * `\"i\"`: include (optional)
    sort = 'sort_example' # str | The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute). (optional)
    start = 56 # int | The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10. (optional)

    try:
        api_response = api_instance.search_cse_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, c2coff=c2coff, cr=cr, cx=cx, date_restrict=date_restrict, exact_terms=exact_terms, exclude_terms=exclude_terms, file_type=file_type, filter=filter, gl=gl, googlehost=googlehost, high_range=high_range, hl=hl, hq=hq, img_color_type=img_color_type, img_dominant_color=img_dominant_color, img_size=img_size, img_type=img_type, link_site=link_site, low_range=low_range, lr=lr, num=num, or_terms=or_terms, q=q, related_site=related_site, rights=rights, safe=safe, search_type=search_type, site_search=site_search, site_search_filter=site_search_filter, sort=sort, start=start)
        print("The response of CseApi->search_cse_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CseApi->search_cse_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **c2coff** | **str**| Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * &#x60;1&#x60;: Disabled * &#x60;0&#x60;: Enabled (default) | [optional] 
 **cr** | **str**| Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter&#39;s value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document&#39;s URL * the geographic location of the Web server&#39;s IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter. | [optional] 
 **cx** | **str**| The Programmable Search Engine ID to use for this request. | [optional] 
 **date_restrict** | **str**| Restricts results to URLs based on date. Supported values include: * &#x60;d[number]&#x60;: requests results from the specified number of past days. * &#x60;w[number]&#x60;: requests results from the specified number of past weeks. * &#x60;m[number]&#x60;: requests results from the specified number of past months. * &#x60;y[number]&#x60;: requests results from the specified number of past years. | [optional] 
 **exact_terms** | **str**| Identifies a phrase that all documents in the search results must contain. | [optional] 
 **exclude_terms** | **str**| Identifies a word or phrase that should not appear in any documents in the search results. | [optional] 
 **file_type** | **str**| Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287). | [optional] 
 **filter** | **str**| Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google&#39;s search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * &#x60;0&#x60;: Turns off duplicate content filter. * &#x60;1&#x60;: Turns on duplicate content filter. | [optional] 
 **gl** | **str**| Geolocation of end user. * The &#x60;gl&#x60; parameter value is a two-letter country code. The &#x60;gl&#x60; parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a &#x60;gl&#x60; parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States. | [optional] 
 **googlehost** | **str**| **Deprecated**. Use the &#x60;gl&#x60; parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search. | [optional] 
 **high_range** | **str**| Specifies the ending value for a search range. * Use &#x60;lowRange&#x60; and &#x60;highRange&#x60; to append an inclusive search range of &#x60;lowRange...highRange&#x60; to the query. | [optional] 
 **hl** | **str**| Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. | [optional] 
 **hq** | **str**| Appends the specified query terms to the query, as if they were combined with a logical AND operator. | [optional] 
 **img_color_type** | **str**| Returns black and white, grayscale, transparent, or color images. Acceptable values are: * &#x60;\&quot;color\&quot;&#x60; * &#x60;\&quot;gray\&quot;&#x60; * &#x60;\&quot;mono\&quot;&#x60;: black and white * &#x60;\&quot;trans\&quot;&#x60;: transparent background | [optional] 
 **img_dominant_color** | **str**| Returns images of a specific dominant color. Acceptable values are: * &#x60;\&quot;black\&quot;&#x60; * &#x60;\&quot;blue\&quot;&#x60; * &#x60;\&quot;brown\&quot;&#x60; * &#x60;\&quot;gray\&quot;&#x60; * &#x60;\&quot;green\&quot;&#x60; * &#x60;\&quot;orange\&quot;&#x60; * &#x60;\&quot;pink\&quot;&#x60; * &#x60;\&quot;purple\&quot;&#x60; * &#x60;\&quot;red\&quot;&#x60; * &#x60;\&quot;teal\&quot;&#x60; * &#x60;\&quot;white\&quot;&#x60; * &#x60;\&quot;yellow\&quot;&#x60; | [optional] 
 **img_size** | **str**| Returns images of a specified size. Acceptable values are: * &#x60;\&quot;huge\&quot;&#x60; * &#x60;\&quot;icon\&quot;&#x60; * &#x60;\&quot;large\&quot;&#x60; * &#x60;\&quot;medium\&quot;&#x60; * &#x60;\&quot;small\&quot;&#x60; * &#x60;\&quot;xlarge\&quot;&#x60; * &#x60;\&quot;xxlarge\&quot;&#x60; | [optional] 
 **img_type** | **str**| Returns images of a type. Acceptable values are: * &#x60;\&quot;clipart\&quot;&#x60; * &#x60;\&quot;face\&quot;&#x60; * &#x60;\&quot;lineart\&quot;&#x60; * &#x60;\&quot;stock\&quot;&#x60; * &#x60;\&quot;photo\&quot;&#x60; * &#x60;\&quot;animated\&quot;&#x60; | [optional] 
 **link_site** | **str**| Specifies that all search results should contain a link to a particular URL. | [optional] 
 **low_range** | **str**| Specifies the starting value for a search range. Use &#x60;lowRange&#x60; and &#x60;highRange&#x60; to append an inclusive search range of &#x60;lowRange...highRange&#x60; to the query. | [optional] 
 **lr** | **str**| Restricts the search to documents written in a particular language (e.g., &#x60;lr&#x3D;lang_ja&#x60;). Acceptable values are: * &#x60;\&quot;lang_ar\&quot;&#x60;: Arabic * &#x60;\&quot;lang_bg\&quot;&#x60;: Bulgarian * &#x60;\&quot;lang_ca\&quot;&#x60;: Catalan * &#x60;\&quot;lang_cs\&quot;&#x60;: Czech * &#x60;\&quot;lang_da\&quot;&#x60;: Danish * &#x60;\&quot;lang_de\&quot;&#x60;: German * &#x60;\&quot;lang_el\&quot;&#x60;: Greek * &#x60;\&quot;lang_en\&quot;&#x60;: English * &#x60;\&quot;lang_es\&quot;&#x60;: Spanish * &#x60;\&quot;lang_et\&quot;&#x60;: Estonian * &#x60;\&quot;lang_fi\&quot;&#x60;: Finnish * &#x60;\&quot;lang_fr\&quot;&#x60;: French * &#x60;\&quot;lang_hr\&quot;&#x60;: Croatian * &#x60;\&quot;lang_hu\&quot;&#x60;: Hungarian * &#x60;\&quot;lang_id\&quot;&#x60;: Indonesian * &#x60;\&quot;lang_is\&quot;&#x60;: Icelandic * &#x60;\&quot;lang_it\&quot;&#x60;: Italian * &#x60;\&quot;lang_iw\&quot;&#x60;: Hebrew * &#x60;\&quot;lang_ja\&quot;&#x60;: Japanese * &#x60;\&quot;lang_ko\&quot;&#x60;: Korean * &#x60;\&quot;lang_lt\&quot;&#x60;: Lithuanian * &#x60;\&quot;lang_lv\&quot;&#x60;: Latvian * &#x60;\&quot;lang_nl\&quot;&#x60;: Dutch * &#x60;\&quot;lang_no\&quot;&#x60;: Norwegian * &#x60;\&quot;lang_pl\&quot;&#x60;: Polish * &#x60;\&quot;lang_pt\&quot;&#x60;: Portuguese * &#x60;\&quot;lang_ro\&quot;&#x60;: Romanian * &#x60;\&quot;lang_ru\&quot;&#x60;: Russian * &#x60;\&quot;lang_sk\&quot;&#x60;: Slovak * &#x60;\&quot;lang_sl\&quot;&#x60;: Slovenian * &#x60;\&quot;lang_sr\&quot;&#x60;: Serbian * &#x60;\&quot;lang_sv\&quot;&#x60;: Swedish * &#x60;\&quot;lang_tr\&quot;&#x60;: Turkish * &#x60;\&quot;lang_zh-CN\&quot;&#x60;: Chinese (Simplified) * &#x60;\&quot;lang_zh-TW\&quot;&#x60;: Chinese (Traditional) | [optional] 
 **num** | **int**| Number of search results to return. * Valid values are integers between 1 and 10, inclusive. | [optional] 
 **or_terms** | **str**| Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. | [optional] 
 **q** | **str**| Query | [optional] 
 **related_site** | **str**| Deprecated. | [optional] 
 **rights** | **str**| Filters based on licensing. Supported values include: &#x60;cc_publicdomain&#x60;, &#x60;cc_attribute&#x60;, &#x60;cc_sharealike&#x60;, &#x60;cc_noncommercial&#x60;, &#x60;cc_nonderived&#x60; and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration). | [optional] 
 **safe** | **str**| Search safety level. Acceptable values are: * &#x60;\&quot;active\&quot;&#x60;: Enables SafeSearch filtering. * &#x60;\&quot;off\&quot;&#x60;: Disables SafeSearch filtering. (default) | [optional] 
 **search_type** | **str**| Specifies the search type: &#x60;image&#x60;. If unspecified, results are limited to webpages. Acceptable values are: * &#x60;\&quot;image\&quot;&#x60;: custom image search. | [optional] 
 **site_search** | **str**| Specifies a given site which should always be included or excluded from results (see &#x60;siteSearchFilter&#x60; parameter, below). | [optional] 
 **site_search_filter** | **str**| Controls whether to include or exclude results from the site named in the &#x60;siteSearch&#x60; parameter. Acceptable values are: * &#x60;\&quot;e\&quot;&#x60;: exclude * &#x60;\&quot;i\&quot;&#x60;: include | [optional] 
 **sort** | **str**| The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort&#x3D;date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute). | [optional] 
 **start** | **int**| The index of the first result to return. The default number of results per page is 10, so &#x60;&amp;start&#x3D;11&#x60; would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of &#x60;start + num&#x60; to a number greater than 100 will produce an error. Also note that the maximum value for &#x60;num&#x60; is 10. | [optional] 

### Return type

[**Search**](Search.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_cse_siterestrict_list**
> Search search_cse_siterestrict_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, c2coff=c2coff, cr=cr, cx=cx, date_restrict=date_restrict, exact_terms=exact_terms, exclude_terms=exclude_terms, file_type=file_type, filter=filter, gl=gl, googlehost=googlehost, high_range=high_range, hl=hl, hq=hq, img_color_type=img_color_type, img_dominant_color=img_dominant_color, img_size=img_size, img_type=img_type, link_site=link_site, low_range=low_range, lr=lr, num=num, or_terms=or_terms, q=q, related_site=related_site, rights=rights, safe=safe, search_type=search_type, site_search=site_search, site_search_filter=site_search_filter, sort=sort, start=start)



Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.

### Example


```python
import openapi_client
from openapi_client.models.search import Search
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://customsearch.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CseApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    c2coff = 'c2coff_example' # str | Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default) (optional)
    cr = 'cr_example' # str | Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter. (optional)
    cx = 'cx_example' # str | The Programmable Search Engine ID to use for this request. (optional)
    date_restrict = 'date_restrict_example' # str | Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. (optional)
    exact_terms = 'exact_terms_example' # str | Identifies a phrase that all documents in the search results must contain. (optional)
    exclude_terms = 'exclude_terms_example' # str | Identifies a word or phrase that should not appear in any documents in the search results. (optional)
    file_type = 'file_type_example' # str | Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287). (optional)
    filter = 'filter_example' # str | Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter. (optional)
    gl = 'gl_example' # str | Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States. (optional)
    googlehost = 'googlehost_example' # str | **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search. (optional)
    high_range = 'high_range_example' # str | Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. (optional)
    hl = 'hl_example' # str | Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. (optional)
    hq = 'hq_example' # str | Appends the specified query terms to the query, as if they were combined with a logical AND operator. (optional)
    img_color_type = 'img_color_type_example' # str | Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `\"color\"` * `\"gray\"` * `\"mono\"`: black and white * `\"trans\"`: transparent background (optional)
    img_dominant_color = 'img_dominant_color_example' # str | Returns images of a specific dominant color. Acceptable values are: * `\"black\"` * `\"blue\"` * `\"brown\"` * `\"gray\"` * `\"green\"` * `\"orange\"` * `\"pink\"` * `\"purple\"` * `\"red\"` * `\"teal\"` * `\"white\"` * `\"yellow\"` (optional)
    img_size = 'img_size_example' # str | Returns images of a specified size. Acceptable values are: * `\"huge\"` * `\"icon\"` * `\"large\"` * `\"medium\"` * `\"small\"` * `\"xlarge\"` * `\"xxlarge\"` (optional)
    img_type = 'img_type_example' # str | Returns images of a type. Acceptable values are: * `\"clipart\"` * `\"face\"` * `\"lineart\"` * `\"stock\"` * `\"photo\"` * `\"animated\"` (optional)
    link_site = 'link_site_example' # str | Specifies that all search results should contain a link to a particular URL. (optional)
    low_range = 'low_range_example' # str | Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. (optional)
    lr = 'lr_example' # str | Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `\"lang_ar\"`: Arabic * `\"lang_bg\"`: Bulgarian * `\"lang_ca\"`: Catalan * `\"lang_cs\"`: Czech * `\"lang_da\"`: Danish * `\"lang_de\"`: German * `\"lang_el\"`: Greek * `\"lang_en\"`: English * `\"lang_es\"`: Spanish * `\"lang_et\"`: Estonian * `\"lang_fi\"`: Finnish * `\"lang_fr\"`: French * `\"lang_hr\"`: Croatian * `\"lang_hu\"`: Hungarian * `\"lang_id\"`: Indonesian * `\"lang_is\"`: Icelandic * `\"lang_it\"`: Italian * `\"lang_iw\"`: Hebrew * `\"lang_ja\"`: Japanese * `\"lang_ko\"`: Korean * `\"lang_lt\"`: Lithuanian * `\"lang_lv\"`: Latvian * `\"lang_nl\"`: Dutch * `\"lang_no\"`: Norwegian * `\"lang_pl\"`: Polish * `\"lang_pt\"`: Portuguese * `\"lang_ro\"`: Romanian * `\"lang_ru\"`: Russian * `\"lang_sk\"`: Slovak * `\"lang_sl\"`: Slovenian * `\"lang_sr\"`: Serbian * `\"lang_sv\"`: Swedish * `\"lang_tr\"`: Turkish * `\"lang_zh-CN\"`: Chinese (Simplified) * `\"lang_zh-TW\"`: Chinese (Traditional) (optional)
    num = 56 # int | Number of search results to return. * Valid values are integers between 1 and 10, inclusive. (optional)
    or_terms = 'or_terms_example' # str | Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. (optional)
    q = 'q_example' # str | Query (optional)
    related_site = 'related_site_example' # str | Deprecated. (optional)
    rights = 'rights_example' # str | Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration). (optional)
    safe = 'safe_example' # str | Search safety level. Acceptable values are: * `\"active\"`: Enables SafeSearch filtering. * `\"off\"`: Disables SafeSearch filtering. (default) (optional)
    search_type = 'search_type_example' # str | Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `\"image\"`: custom image search. (optional)
    site_search = 'site_search_example' # str | Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below). (optional)
    site_search_filter = 'site_search_filter_example' # str | Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `\"e\"`: exclude * `\"i\"`: include (optional)
    sort = 'sort_example' # str | The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute). (optional)
    start = 56 # int | The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10. (optional)

    try:
        api_response = api_instance.search_cse_siterestrict_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, c2coff=c2coff, cr=cr, cx=cx, date_restrict=date_restrict, exact_terms=exact_terms, exclude_terms=exclude_terms, file_type=file_type, filter=filter, gl=gl, googlehost=googlehost, high_range=high_range, hl=hl, hq=hq, img_color_type=img_color_type, img_dominant_color=img_dominant_color, img_size=img_size, img_type=img_type, link_site=link_site, low_range=low_range, lr=lr, num=num, or_terms=or_terms, q=q, related_site=related_site, rights=rights, safe=safe, search_type=search_type, site_search=site_search, site_search_filter=site_search_filter, sort=sort, start=start)
        print("The response of CseApi->search_cse_siterestrict_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CseApi->search_cse_siterestrict_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **c2coff** | **str**| Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * &#x60;1&#x60;: Disabled * &#x60;0&#x60;: Enabled (default) | [optional] 
 **cr** | **str**| Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter&#39;s value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document&#39;s URL * the geographic location of the Web server&#39;s IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter. | [optional] 
 **cx** | **str**| The Programmable Search Engine ID to use for this request. | [optional] 
 **date_restrict** | **str**| Restricts results to URLs based on date. Supported values include: * &#x60;d[number]&#x60;: requests results from the specified number of past days. * &#x60;w[number]&#x60;: requests results from the specified number of past weeks. * &#x60;m[number]&#x60;: requests results from the specified number of past months. * &#x60;y[number]&#x60;: requests results from the specified number of past years. | [optional] 
 **exact_terms** | **str**| Identifies a phrase that all documents in the search results must contain. | [optional] 
 **exclude_terms** | **str**| Identifies a word or phrase that should not appear in any documents in the search results. | [optional] 
 **file_type** | **str**| Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287). | [optional] 
 **filter** | **str**| Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google&#39;s search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * &#x60;0&#x60;: Turns off duplicate content filter. * &#x60;1&#x60;: Turns on duplicate content filter. | [optional] 
 **gl** | **str**| Geolocation of end user. * The &#x60;gl&#x60; parameter value is a two-letter country code. The &#x60;gl&#x60; parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a &#x60;gl&#x60; parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States. | [optional] 
 **googlehost** | **str**| **Deprecated**. Use the &#x60;gl&#x60; parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search. | [optional] 
 **high_range** | **str**| Specifies the ending value for a search range. * Use &#x60;lowRange&#x60; and &#x60;highRange&#x60; to append an inclusive search range of &#x60;lowRange...highRange&#x60; to the query. | [optional] 
 **hl** | **str**| Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. | [optional] 
 **hq** | **str**| Appends the specified query terms to the query, as if they were combined with a logical AND operator. | [optional] 
 **img_color_type** | **str**| Returns black and white, grayscale, transparent, or color images. Acceptable values are: * &#x60;\&quot;color\&quot;&#x60; * &#x60;\&quot;gray\&quot;&#x60; * &#x60;\&quot;mono\&quot;&#x60;: black and white * &#x60;\&quot;trans\&quot;&#x60;: transparent background | [optional] 
 **img_dominant_color** | **str**| Returns images of a specific dominant color. Acceptable values are: * &#x60;\&quot;black\&quot;&#x60; * &#x60;\&quot;blue\&quot;&#x60; * &#x60;\&quot;brown\&quot;&#x60; * &#x60;\&quot;gray\&quot;&#x60; * &#x60;\&quot;green\&quot;&#x60; * &#x60;\&quot;orange\&quot;&#x60; * &#x60;\&quot;pink\&quot;&#x60; * &#x60;\&quot;purple\&quot;&#x60; * &#x60;\&quot;red\&quot;&#x60; * &#x60;\&quot;teal\&quot;&#x60; * &#x60;\&quot;white\&quot;&#x60; * &#x60;\&quot;yellow\&quot;&#x60; | [optional] 
 **img_size** | **str**| Returns images of a specified size. Acceptable values are: * &#x60;\&quot;huge\&quot;&#x60; * &#x60;\&quot;icon\&quot;&#x60; * &#x60;\&quot;large\&quot;&#x60; * &#x60;\&quot;medium\&quot;&#x60; * &#x60;\&quot;small\&quot;&#x60; * &#x60;\&quot;xlarge\&quot;&#x60; * &#x60;\&quot;xxlarge\&quot;&#x60; | [optional] 
 **img_type** | **str**| Returns images of a type. Acceptable values are: * &#x60;\&quot;clipart\&quot;&#x60; * &#x60;\&quot;face\&quot;&#x60; * &#x60;\&quot;lineart\&quot;&#x60; * &#x60;\&quot;stock\&quot;&#x60; * &#x60;\&quot;photo\&quot;&#x60; * &#x60;\&quot;animated\&quot;&#x60; | [optional] 
 **link_site** | **str**| Specifies that all search results should contain a link to a particular URL. | [optional] 
 **low_range** | **str**| Specifies the starting value for a search range. Use &#x60;lowRange&#x60; and &#x60;highRange&#x60; to append an inclusive search range of &#x60;lowRange...highRange&#x60; to the query. | [optional] 
 **lr** | **str**| Restricts the search to documents written in a particular language (e.g., &#x60;lr&#x3D;lang_ja&#x60;). Acceptable values are: * &#x60;\&quot;lang_ar\&quot;&#x60;: Arabic * &#x60;\&quot;lang_bg\&quot;&#x60;: Bulgarian * &#x60;\&quot;lang_ca\&quot;&#x60;: Catalan * &#x60;\&quot;lang_cs\&quot;&#x60;: Czech * &#x60;\&quot;lang_da\&quot;&#x60;: Danish * &#x60;\&quot;lang_de\&quot;&#x60;: German * &#x60;\&quot;lang_el\&quot;&#x60;: Greek * &#x60;\&quot;lang_en\&quot;&#x60;: English * &#x60;\&quot;lang_es\&quot;&#x60;: Spanish * &#x60;\&quot;lang_et\&quot;&#x60;: Estonian * &#x60;\&quot;lang_fi\&quot;&#x60;: Finnish * &#x60;\&quot;lang_fr\&quot;&#x60;: French * &#x60;\&quot;lang_hr\&quot;&#x60;: Croatian * &#x60;\&quot;lang_hu\&quot;&#x60;: Hungarian * &#x60;\&quot;lang_id\&quot;&#x60;: Indonesian * &#x60;\&quot;lang_is\&quot;&#x60;: Icelandic * &#x60;\&quot;lang_it\&quot;&#x60;: Italian * &#x60;\&quot;lang_iw\&quot;&#x60;: Hebrew * &#x60;\&quot;lang_ja\&quot;&#x60;: Japanese * &#x60;\&quot;lang_ko\&quot;&#x60;: Korean * &#x60;\&quot;lang_lt\&quot;&#x60;: Lithuanian * &#x60;\&quot;lang_lv\&quot;&#x60;: Latvian * &#x60;\&quot;lang_nl\&quot;&#x60;: Dutch * &#x60;\&quot;lang_no\&quot;&#x60;: Norwegian * &#x60;\&quot;lang_pl\&quot;&#x60;: Polish * &#x60;\&quot;lang_pt\&quot;&#x60;: Portuguese * &#x60;\&quot;lang_ro\&quot;&#x60;: Romanian * &#x60;\&quot;lang_ru\&quot;&#x60;: Russian * &#x60;\&quot;lang_sk\&quot;&#x60;: Slovak * &#x60;\&quot;lang_sl\&quot;&#x60;: Slovenian * &#x60;\&quot;lang_sr\&quot;&#x60;: Serbian * &#x60;\&quot;lang_sv\&quot;&#x60;: Swedish * &#x60;\&quot;lang_tr\&quot;&#x60;: Turkish * &#x60;\&quot;lang_zh-CN\&quot;&#x60;: Chinese (Simplified) * &#x60;\&quot;lang_zh-TW\&quot;&#x60;: Chinese (Traditional) | [optional] 
 **num** | **int**| Number of search results to return. * Valid values are integers between 1 and 10, inclusive. | [optional] 
 **or_terms** | **str**| Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. | [optional] 
 **q** | **str**| Query | [optional] 
 **related_site** | **str**| Deprecated. | [optional] 
 **rights** | **str**| Filters based on licensing. Supported values include: &#x60;cc_publicdomain&#x60;, &#x60;cc_attribute&#x60;, &#x60;cc_sharealike&#x60;, &#x60;cc_noncommercial&#x60;, &#x60;cc_nonderived&#x60; and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration). | [optional] 
 **safe** | **str**| Search safety level. Acceptable values are: * &#x60;\&quot;active\&quot;&#x60;: Enables SafeSearch filtering. * &#x60;\&quot;off\&quot;&#x60;: Disables SafeSearch filtering. (default) | [optional] 
 **search_type** | **str**| Specifies the search type: &#x60;image&#x60;. If unspecified, results are limited to webpages. Acceptable values are: * &#x60;\&quot;image\&quot;&#x60;: custom image search. | [optional] 
 **site_search** | **str**| Specifies a given site which should always be included or excluded from results (see &#x60;siteSearchFilter&#x60; parameter, below). | [optional] 
 **site_search_filter** | **str**| Controls whether to include or exclude results from the site named in the &#x60;siteSearch&#x60; parameter. Acceptable values are: * &#x60;\&quot;e\&quot;&#x60;: exclude * &#x60;\&quot;i\&quot;&#x60;: include | [optional] 
 **sort** | **str**| The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort&#x3D;date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute). | [optional] 
 **start** | **int**| The index of the first result to return. The default number of results per page is 10, so &#x60;&amp;start&#x3D;11&#x60; would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of &#x60;start + num&#x60; to a number greater than 100 will produce an error. Also note that the maximum value for &#x60;num&#x60; is 10. | [optional] 

### Return type

[**Search**](Search.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

