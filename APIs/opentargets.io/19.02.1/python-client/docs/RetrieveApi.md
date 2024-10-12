# openapi_client.RetrieveApi

All URIs are relative to *http://platform-api.opentargets.io/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_association_by_id_0**](RetrieveApi.md#get_association_by_id_0) | **GET** /platform/public/association | Get association by id
[**get_evidence_by_id_0**](RetrieveApi.md#get_evidence_by_id_0) | **GET** /platform/public/evidence | Get evidence by ID
[**post_evidence_by_id_0**](RetrieveApi.md#post_evidence_by_id_0) | **POST** /platform/public/evidence | Get evidence for a list of IDs


# **get_association_by_id_0**
> get_association_by_id_0(id)

Get association by id

Once we integrate all evidence connecting a target to a specific disease, we  compute an association score by the means of an harmonic sum. This *association score* provides  an indication of how strong the evidence behind each connection is and can be  used to rank genes in order of likelihood as drug targets.  The association ID is constructed by using the Ensembl ID of the gene and the  EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).  The method returns an association object, which contains the data and summary  on each evidence type included in the calculation of the score, as well as the score itself. 

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
    api_instance = openapi_client.RetrieveApi(api_client)
    id = 'id_example' # str | An association ID usually in the form of `TARGET_ID-DISEASE_ID`.

    try:
        # Get association by id
        api_instance.get_association_by_id_0(id)
    except Exception as e:
        print("Exception when calling RetrieveApi->get_association_by_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| An association ID usually in the form of &#x60;TARGET_ID-DISEASE_ID&#x60;. | 

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

# **get_evidence_by_id_0**
> get_evidence_by_id_0(id)

Get evidence by ID

We call **evidence** a unit of data that support a connection between a target and a disease. The Open Targets Platform integrates multiple types of evidence including genetic associations, somatic mutations, RNA expression and target-disease associations mined from the literature. This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their targetvalidation.org ID.  Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2). You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).  **Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases. 

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
    api_instance = openapi_client.RetrieveApi(api_client)
    id = 'id_example' # str | Internal unique ID of the evidence string to retrieve.

    try:
        # Get evidence by ID
        api_instance.get_evidence_by_id_0(id)
    except Exception as e:
        print("Exception when calling RetrieveApi->get_evidence_by_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Internal unique ID of the evidence string to retrieve. | 

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

# **post_evidence_by_id_0**
> post_evidence_by_id_0(body)

Get evidence for a list of IDs

This is the POST version of [/public/evidence](#!/public/get_public_evidence). It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body. 

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
    api_instance = openapi_client.RetrieveApi(api_client)
    body = 'body_example' # str | IDs of the evidence string to retrieve.

    try:
        # Get evidence for a list of IDs
        api_instance.post_evidence_by_id_0(body)
    except Exception as e:
        print("Exception when calling RetrieveApi->post_evidence_by_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| IDs of the evidence string to retrieve. | 

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

