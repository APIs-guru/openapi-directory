# openapi_client.PrivateApi

All URIs are relative to *http://platform-api.opentargets.io/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_api_docs**](PrivateApi.md#get_api_docs) | **GET** /platform/docs | Browse API documentation
[**get_api_swagger_ui**](PrivateApi.md#get_api_swagger_ui) | **GET** /platform/docs/swagger-ui | Browse interactive API documentation
[**get_autocomplete**](PrivateApi.md#get_autocomplete) | **GET** /platform/private/autocomplete | Get &#x60;autocomplete&#x60; objects.
[**get_disease_by_id**](PrivateApi.md#get_disease_by_id) | **GET** /platform/private/disease/{disease} | Find information about a disease
[**get_drug_by_id**](PrivateApi.md#get_drug_by_id) | **GET** /platform/private/drug/{DRUG_ID} | Get drug by ID
[**get_ec_oby_id**](PrivateApi.md#get_ec_oby_id) | **GET** /platform/private/eco/{ECO_ID} | Get evidence code by ID
[**get_quick_search**](PrivateApi.md#get_quick_search) | **GET** /platform/private/quicksearch | Search most relevant results
[**get_relation_by_efoid**](PrivateApi.md#get_relation_by_efoid) | **GET** /platform/private/relation/disease/{disease} | Find related entities by disease
[**get_relation_by_ensgid**](PrivateApi.md#get_relation_by_ensgid) | **GET** /platform/private/relation/target/{target} | Find related entities by target
[**get_swagger**](PrivateApi.md#get_swagger) | **GET** /platform/swagger | Get OpenAPI schema
[**get_target_by_ensgid**](PrivateApi.md#get_target_by_ensgid) | **GET** /platform/private/target/{target} | Find information about a target
[**get_target_expression_by_ensgid**](PrivateApi.md#get_target_expression_by_ensgid) | **GET** /platform/private/target/expression | Query expression levels
[**post_best_hit_search**](PrivateApi.md#post_best_hit_search) | **POST** /platform/private/besthitsearch | Find the best hit
[**post_disease_by_id**](PrivateApi.md#post_disease_by_id) | **POST** /platform/private/disease | Find information about a list of diseases
[**post_enrichment_target**](PrivateApi.md#post_enrichment_target) | **POST** /platform/private/enrichment/targets | Enrichment analysis
[**post_relation**](PrivateApi.md#post_relation) | **POST** /platform/private/relation | Find related entities
[**post_target_by_ensgid**](PrivateApi.md#post_target_by_ensgid) | **POST** /platform/private/target | Find information about a list of targets
[**post_target_expression_by_ensgid**](PrivateApi.md#post_target_expression_by_ensgid) | **POST** /platform/private/target/expression | Batch query expression levels


# **get_api_docs**
> get_api_docs()

Browse API documentation

Access api docs as served by Redoc

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
    api_instance = openapi_client.PrivateApi(api_client)

    try:
        # Browse API documentation
        api_instance.get_api_docs()
    except Exception as e:
        print("Exception when calling PrivateApi->get_api_docs: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Redoc API documentation file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_api_swagger_ui**
> get_api_swagger_ui()

Browse interactive API documentation

Interactive API docs using swagger-ui

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
    api_instance = openapi_client.PrivateApi(api_client)

    try:
        # Browse interactive API documentation
        api_instance.get_api_swagger_ui()
    except Exception as e:
        print("Exception when calling PrivateApi->get_api_swagger_ui: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Swagger-UI API documentation file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_autocomplete**
> get_autocomplete(q, size=size)

Get `autocomplete` objects.

Search for the closest term to autocomplete in the search box. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    q = 'q_example' # str | A full text query.
    size = 'size_example' # str | Maximum amount of results to return. Defaults to 5. (optional)

    try:
        # Get `autocomplete` objects.
        api_instance.get_autocomplete(q, size=size)
    except Exception as e:
        print("Exception when calling PrivateApi->get_autocomplete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| A full text query. | 
 **size** | **str**| Maximum amount of results to return. Defaults to 5. | [optional] 

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

# **get_disease_by_id**
> get_disease_by_id(disease)

Find information about a disease

Get `disease` objects. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    disease = 'disease_example' # str | An EFO identifier.

    try:
        # Find information about a disease
        api_instance.get_disease_by_id(disease)
    except Exception as e:
        print("Exception when calling PrivateApi->get_disease_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disease** | **str**| An EFO identifier. | 

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

# **get_drug_by_id**
> get_drug_by_id(drug_id, drug_id2)

Get drug by ID

Get `drug` objects. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    drug_id = 'drug_id_example' # str | An ID in the drug index.
    drug_id2 = 'drug_id_example' # str | Automatically added

    try:
        # Get drug by ID
        api_instance.get_drug_by_id(drug_id, drug_id2)
    except Exception as e:
        print("Exception when calling PrivateApi->get_drug_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drug_id** | **str**| An ID in the drug index. | 
 **drug_id2** | **str**| Automatically added | 

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

# **get_ec_oby_id**
> get_ec_oby_id(eco_id)

Get evidence code by ID

Get `ECO` objects. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    eco_id = 'eco_id_example' # str | An [evidence code ontology](http://www.ebi.ac.uk/ols/v2/browse.do?ontName=ECO) ID.

    try:
        # Get evidence code by ID
        api_instance.get_ec_oby_id(eco_id)
    except Exception as e:
        print("Exception when calling PrivateApi->get_ec_oby_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eco_id** | **str**| An [evidence code ontology](http://www.ebi.ac.uk/ols/v2/browse.do?ontName&#x3D;ECO) ID. | 

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

# **get_quick_search**
> get_quick_search(q, size=size)

Search most relevant results

Get `search-result` objects. Enables search bar functionality. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    q = 'q_example' # str | A full text query.
    size = 'size_example' # str | Maximum amount of results to return. Defaults to 5. (optional)

    try:
        # Search most relevant results
        api_instance.get_quick_search(q, size=size)
    except Exception as e:
        print("Exception when calling PrivateApi->get_quick_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| A full text query. | 
 **size** | **str**| Maximum amount of results to return. Defaults to 5. | [optional] 

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

# **get_relation_by_efoid**
> get_relation_by_efoid(disease)

Find related entities by disease

Get `relation` objects starting from diseases. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    disease = 'disease_example' # str | An EFO gene identifier.

    try:
        # Find related entities by disease
        api_instance.get_relation_by_efoid(disease)
    except Exception as e:
        print("Exception when calling PrivateApi->get_relation_by_efoid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disease** | **str**| An EFO gene identifier. | 

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

# **get_relation_by_ensgid**
> get_relation_by_ensgid(target)

Find related entities by target

Get `relation` objects starting from diseases. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    target = 'target_example' # str | An Ensembl gene identifier.

    try:
        # Find related entities by target
        api_instance.get_relation_by_ensgid(target)
    except Exception as e:
        print("Exception when calling PrivateApi->get_relation_by_ensgid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **str**| An Ensembl gene identifier. | 

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

# **get_swagger**
> get_swagger()

Get OpenAPI schema

Get swagger.yaml specs for the API

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
    api_instance = openapi_client.PrivateApi(api_client)

    try:
        # Get OpenAPI schema
        api_instance.get_swagger()
    except Exception as e:
        print("Exception when calling PrivateApi->get_swagger: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Swagger.yaml file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_target_by_ensgid**
> get_target_by_ensgid(target)

Find information about a target

Get `target` objects. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    target = 'target_example' # str | An Ensembl gene ID for the target of interest.

    try:
        # Find information about a target
        api_instance.get_target_by_ensgid(target)
    except Exception as e:
        print("Exception when calling PrivateApi->get_target_by_ensgid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **str**| An Ensembl gene ID for the target of interest. | 

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

# **get_target_expression_by_ensgid**
> get_target_expression_by_ensgid(gene)

Query expression levels

Get `gene-expression` objects. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    gene = 'gene_example' # str | An Ensembl gene identifier.

    try:
        # Query expression levels
        api_instance.get_target_expression_by_ensgid(gene)
    except Exception as e:
        print("Exception when calling PrivateApi->get_target_expression_by_ensgid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gene** | **str**| An Ensembl gene identifier. | 

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

# **post_best_hit_search**
> post_best_hit_search(body)

Find the best hit

Fire the search method for multiple strings 

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
    api_instance = openapi_client.PrivateApi(api_client)
    body = 'body_example' # str | list of strings to search for

    try:
        # Find the best hit
        api_instance.post_best_hit_search(body)
    except Exception as e:
        print("Exception when calling PrivateApi->post_best_hit_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| list of strings to search for | 

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

# **post_disease_by_id**
> post_disease_by_id(body)

Find information about a list of diseases

Get `disease` objects. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    body = 'body_example' # str | An EFO identifier.

    try:
        # Find information about a list of diseases
        api_instance.post_disease_by_id(body)
    except Exception as e:
        print("Exception when calling PrivateApi->post_disease_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| An EFO identifier. | 

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

# **post_enrichment_target**
> post_enrichment_target(body)

Enrichment analysis

Returns an enrichment analysis for a list of targets passed in the body 

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
    api_instance = openapi_client.PrivateApi(api_client)
    body = 'body_example' # str | IDs of the targets to do the enrichment analysis for.

    try:
        # Enrichment analysis
        api_instance.post_enrichment_target(body)
    except Exception as e:
        print("Exception when calling PrivateApi->post_enrichment_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| IDs of the targets to do the enrichment analysis for. | 

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

# **post_relation**
> post_relation(body)

Find related entities

Get `relation` objects. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    body = 'body_example' # str | An Ensembl gene identifier.

    try:
        # Find related entities
        api_instance.post_relation(body)
    except Exception as e:
        print("Exception when calling PrivateApi->post_relation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| An Ensembl gene identifier. | 

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

# **post_target_by_ensgid**
> post_target_by_ensgid(body)

Find information about a list of targets

Get `target` objects. Used for the target profile page. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    body = 'body_example' # str | An Ensembl gene identifier.

    try:
        # Find information about a list of targets
        api_instance.post_target_by_ensgid(body)
    except Exception as e:
        print("Exception when calling PrivateApi->post_target_by_ensgid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| An Ensembl gene identifier. | 

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

# **post_target_expression_by_ensgid**
> post_target_expression_by_ensgid(body)

Batch query expression levels

Get `gene-expression` objects. 

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
    api_instance = openapi_client.PrivateApi(api_client)
    body = 'body_example' # str | An Ensembl gene identifier.

    try:
        # Batch query expression levels
        api_instance.post_target_expression_by_ensgid(body)
    except Exception as e:
        print("Exception when calling PrivateApi->post_target_expression_by_ensgid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| An Ensembl gene identifier. | 

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

