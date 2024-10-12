# openapi_client.FilterApi

All URIs are relative to *http://platform-api.opentargets.io/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_association_filter_0**](FilterApi.md#get_association_filter_0) | **GET** /platform/public/association/filter | Filter available associations
[**get_evidence_filter_0**](FilterApi.md#get_evidence_filter_0) | **GET** /platform/public/evidence/filter | Filter available evidence
[**post_association_filter_0**](FilterApi.md#post_association_filter_0) | **POST** /platform/public/association/filter | Batch query available associations
[**post_evidence_filter_0**](FilterApi.md#post_evidence_filter_0) | **POST** /platform/public/evidence/filter | Batch filter available evidence


# **get_association_filter_0**
> get_association_filter_0(target=target, disease=disease, therapeutic_area=therapeutic_area, datasource=datasource, datatype=datatype, pathway=pathway, target_class=target_class, uniprotkw=uniprotkw, direct=direct, datastructure=datastructure, fields=fields, facets=facets, scorevalue_min=scorevalue_min, scorevalue_max=scorevalue_max, scorevalue_types=scorevalue_types, size=size, var_from=var_from, format=format, sort=sort, search=search)

Filter available associations

More complex queries for associations scores and objects can be done using this method, which allows to sort in different order, restrict to a specific class of diseases or targets, as well as filtering results by score and associated pathways. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilterApi(api_client)
    target = 'target_example' # str | A target identifier listed as target.id. (optional)
    disease = 'disease_example' # str | An EFO code listed as disease.id. (optional)
    therapeutic_area = 'therapeutic_area_example' # str | An EFO code of a therapeutic area. (optional)
    datasource = 'datasource_example' # str | Data source to consider. (optional)
    datatype = 'datatype_example' # str | Data type to consider. (optional)
    pathway = 'pathway_example' # str | A Reactome pathway identifier (returning only those targets linked to the specified pathway). (optional)
    target_class = 'target_class_example' # str | A ChEMBL target class identifier (returning only those targets belonging to the specified class). (optional)
    uniprotkw = 'uniprotkw_example' # str | A UniProt keyword (meaning all the targets linked to that keyword). (optional)
    direct = True # bool | If `true`, it returns associations that have at least one direct evidence connecting the target and the disease. If `false` it only returns associations for which there is no direct evidence connecting the target and the disease, but only evidence connecting the target to a children of the disease in the EFO ontology. (optional)
    datastructure = 'datastructure_example' # str | Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'. (optional)
    fields = 'fields_example' # str | Fields you want to retrieve. This will get priority over the data structure requested. (optional)
    facets = False # bool | Returns facets (optional) (default to False)
    scorevalue_min = 0 # float | Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points. (optional) (default to 0)
    scorevalue_max = 3.4 # float | Filter by maximum score value. (optional)
    scorevalue_types = 'scorevalue_types_example' # str | Score types to apply the score value min and max filters. The default is `overall`. (optional)
    size = 3.4 # float | Maximum amount of results to return. Defaults to 10, max is 10000. (optional)
    var_from = 3.4 # float | How many initial results should be skipped. Defaults to 0. (optional)
    format = 'format_example' # str | Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON. (optional)
    sort = 'sort_example' # str | Sort by the given score type. Defaults to 'overall' and descending order. Use '~' prefix to do ascending order e.g. '~overall'. You will call a data type score like: 'datatypes.literature', and a data source as 'datasources.gwas'. Supports multiple entries.  (optional)
    search = 'search_example' # str | Restrict the filtered results to those matching the passed string. The matching is done with a phrase match prefix.  (optional)

    try:
        # Filter available associations
        api_instance.get_association_filter_0(target=target, disease=disease, therapeutic_area=therapeutic_area, datasource=datasource, datatype=datatype, pathway=pathway, target_class=target_class, uniprotkw=uniprotkw, direct=direct, datastructure=datastructure, fields=fields, facets=facets, scorevalue_min=scorevalue_min, scorevalue_max=scorevalue_max, scorevalue_types=scorevalue_types, size=size, var_from=var_from, format=format, sort=sort, search=search)
    except Exception as e:
        print("Exception when calling FilterApi->get_association_filter_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **str**| A target identifier listed as target.id. | [optional] 
 **disease** | **str**| An EFO code listed as disease.id. | [optional] 
 **therapeutic_area** | **str**| An EFO code of a therapeutic area. | [optional] 
 **datasource** | **str**| Data source to consider. | [optional] 
 **datatype** | **str**| Data type to consider. | [optional] 
 **pathway** | **str**| A Reactome pathway identifier (returning only those targets linked to the specified pathway). | [optional] 
 **target_class** | **str**| A ChEMBL target class identifier (returning only those targets belonging to the specified class). | [optional] 
 **uniprotkw** | **str**| A UniProt keyword (meaning all the targets linked to that keyword). | [optional] 
 **direct** | **bool**| If &#x60;true&#x60;, it returns associations that have at least one direct evidence connecting the target and the disease. If &#x60;false&#x60; it only returns associations for which there is no direct evidence connecting the target and the disease, but only evidence connecting the target to a children of the disease in the EFO ontology. | [optional] 
 **datastructure** | **str**| Type of data structure to return. Can be &#39;full&#39;, &#39;simple&#39;, &#39;ids&#39;, or &#39;count&#39;. | [optional] 
 **fields** | **str**| Fields you want to retrieve. This will get priority over the data structure requested. | [optional] 
 **facets** | **bool**| Returns facets | [optional] [default to False]
 **scorevalue_min** | **float**| Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points. | [optional] [default to 0]
 **scorevalue_max** | **float**| Filter by maximum score value. | [optional] 
 **scorevalue_types** | **str**| Score types to apply the score value min and max filters. The default is &#x60;overall&#x60;. | [optional] 
 **size** | **float**| Maximum amount of results to return. Defaults to 10, max is 10000. | [optional] 
 **var_from** | **float**| How many initial results should be skipped. Defaults to 0. | [optional] 
 **format** | **str**| Format to get the data back. Can be &#39;json&#39;, &#39;xml&#39;, &#39;tab&#39; or &#39;csv&#39;. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON. | [optional] 
 **sort** | **str**| Sort by the given score type. Defaults to &#39;overall&#39; and descending order. Use &#39;~&#39; prefix to do ascending order e.g. &#39;~overall&#39;. You will call a data type score like: &#39;datatypes.literature&#39;, and a data source as &#39;datasources.gwas&#39;. Supports multiple entries.  | [optional] 
 **search** | **str**| Restrict the filtered results to those matching the passed string. The matching is done with a phrase match prefix.  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_evidence_filter_0**
> get_evidence_filter_0(target=target, disease=disease, data_source=data_source, datatype=datatype, pathway=pathway, uniprotkw=uniprotkw, datastructure=datastructure, fields=fields, scorevalue_min=scorevalue_min, scorevalue_max=scorevalue_max, sort=sort, size=size, var_from=var_from, format=format)

Filter available evidence

The filter method allows to retrieve the specific data that supports a connection between targets and diseases. Filters can be used to restrict the results by source and type of data, or limit results to targets which are part of a particular pathway. Minimum and maximum scores can be specified as well as the type of evidence linking target and disease. **Note** that multiple genes and diseases can be specified in the same request. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilterApi(api_client)
    target = 'target_example' # str | A target identifier listed as target.id. (optional)
    disease = 'disease_example' # str | An EFO code listed as disease.id. (optional)
    data_source = 'data_source_example' # str | Data source to consider. (optional)
    datatype = 'datatype_example' # str | Data type to consider. (optional)
    pathway = 'pathway_example' # str | A pathway identifier (meaning all the targets linked to that pathway). (optional)
    uniprotkw = 'uniprotkw_example' # str | A UniProt keyword (meaning all the targets linked to that keyword). (optional)
    datastructure = 'datastructure_example' # str | Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'. (optional)
    fields = 'fields_example' # str | The fields you want to retrieve. This will get priority over the data structure requested. (optional)
    scorevalue_min = 0 # float | Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points. (optional) (default to 0)
    scorevalue_max = 3.4 # float | Filter by maximum score value. (optional)
    sort = 'sort_example' # str | Sort by the given field. The default is 'scores.association_score' in descending order. Use '~' prefix to do ascending order e.g. '~scores.association_score'. It supports multiple entries.  (optional)
    size = 3.4 # float | Maximum amount of results to return. Defaults to 10, max is 10000. (optional)
    var_from = 3.4 # float | How many initial results should be skipped. Defaults to 0. (optional)
    format = 'format_example' # str | Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON. (optional)

    try:
        # Filter available evidence
        api_instance.get_evidence_filter_0(target=target, disease=disease, data_source=data_source, datatype=datatype, pathway=pathway, uniprotkw=uniprotkw, datastructure=datastructure, fields=fields, scorevalue_min=scorevalue_min, scorevalue_max=scorevalue_max, sort=sort, size=size, var_from=var_from, format=format)
    except Exception as e:
        print("Exception when calling FilterApi->get_evidence_filter_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **str**| A target identifier listed as target.id. | [optional] 
 **disease** | **str**| An EFO code listed as disease.id. | [optional] 
 **data_source** | **str**| Data source to consider. | [optional] 
 **datatype** | **str**| Data type to consider. | [optional] 
 **pathway** | **str**| A pathway identifier (meaning all the targets linked to that pathway). | [optional] 
 **uniprotkw** | **str**| A UniProt keyword (meaning all the targets linked to that keyword). | [optional] 
 **datastructure** | **str**| Type of data structure to return. Can be &#39;full&#39;, &#39;simple&#39;, &#39;ids&#39;, or &#39;count&#39;. | [optional] 
 **fields** | **str**| The fields you want to retrieve. This will get priority over the data structure requested. | [optional] 
 **scorevalue_min** | **float**| Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points. | [optional] [default to 0]
 **scorevalue_max** | **float**| Filter by maximum score value. | [optional] 
 **sort** | **str**| Sort by the given field. The default is &#39;scores.association_score&#39; in descending order. Use &#39;~&#39; prefix to do ascending order e.g. &#39;~scores.association_score&#39;. It supports multiple entries.  | [optional] 
 **size** | **float**| Maximum amount of results to return. Defaults to 10, max is 10000. | [optional] 
 **var_from** | **float**| How many initial results should be skipped. Defaults to 0. | [optional] 
 **format** | **str**| Format to get the data back. Can be &#39;json&#39;, &#39;xml&#39;, &#39;tab&#39; or &#39;csv&#39;. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_association_filter_0**
> post_association_filter_0(body)

Batch query available associations

Complex queries and filters for association objects can also be submitted using a JSON object and the equivalent POST method. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilterApi(api_client)
    body = 'body_example' # str | Filters to apply when retrieving association objects.

    try:
        # Batch query available associations
        api_instance.post_association_filter_0(body)
    except Exception as e:
        print("Exception when calling FilterApi->post_association_filter_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| Filters to apply when retrieving association objects. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_evidence_filter_0**
> post_evidence_filter_0(body)

Batch filter available evidence

POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter). Filters can be specified as part of a `json` object in the body, simplifying the submission of queries. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://platform-api.opentargets.io/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://platform-api.opentargets.io/v3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilterApi(api_client)
    body = 'body_example' # str | Filters to apply when retrieving evidence string objects.

    try:
        # Batch filter available evidence
        api_instance.post_evidence_filter_0(body)
    except Exception as e:
        print("Exception when calling FilterApi->post_evidence_filter_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| Filters to apply when retrieving evidence string objects. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

