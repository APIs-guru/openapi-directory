# openapi_client.RadioDNSApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**radiodns_spi31_gi_xml_get**](RadioDNSApi.md#radiodns_spi31_gi_xml_get) | **GET** /radiodns/spi/3.1/GI.xml | Get the group information document.
[**radiodns_spi31_id_fqdn_sid_date_pi_xml_get**](RadioDNSApi.md#radiodns_spi31_id_fqdn_sid_date_pi_xml_get) | **GET** /radiodns/spi/3.1/id/{fqdn}/{sid}/{date}_PI.xml | Get the program information document.
[**radiodns_spi31_si_xml_get**](RadioDNSApi.md#radiodns_spi31_si_xml_get) | **GET** /radiodns/spi/3.1/SI.xml | Get the service information document.


# **radiodns_spi31_gi_xml_get**
> str radiodns_spi31_gi_xml_get()

Get the group information document.

The group information (GI) document allows programs to be put into groups such as serials, series, shows, or general themes and provide additional metadata for that group such as a description, links, and a logo. A program in the guide can be linked to its group using the \"memberOf\" field to allow clients to easily link programs together for a given Content Depot Program/Show in the EPG. GI will be published for all Content Depot programs that have the \"publish metadata\" option enabled. By using the group information, clients have the ability to access a single list of all metadata supported program titles, links, images, and descriptions. This information can be used to assist a station when setting up a schedule or it can be used in the end user metadata to provide additional information about the content such as displaying \"other episodes from this program\" or displaying the group, program, and program event images.  Currently all programs with \"publish metadata\" enabled will be included in the group information even if they are not active in the program guide. This may change in the future if the number of programs grows.  Note that while the location of the GI document isn't expected to change in the near future, as per the RadioDNS specification the authoritative link to the document is defined in the SI document with the mime value ```application/xml+gi```.  The response will use standard HTTP cache-control headers to indicate when the document should be refreshed as well as an ETag to allow for lightweight change detection. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RadioDNSApi(api_client)

    try:
        # Get the group information document.
        api_response = api_instance.radiodns_spi31_gi_xml_get()
        print("The response of RadioDNSApi->radiodns_spi31_gi_xml_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RadioDNSApi->radiodns_spi31_gi_xml_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The group information document is returned in the body of the response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **radiodns_spi31_id_fqdn_sid_date_pi_xml_get**
> str radiodns_spi31_id_fqdn_sid_date_pi_xml_get(fqdn, sid, var_date, x_radiodnsspi_api_key=x_radiodnsspi_api_key)

Get the program information document.

The program information (PI) document holds the linear and the on-demand schedule of programs for a service over a 24 hour period. This information provides an electronic program guide (EPG) to clients that defines the program metadata such as:  *   Names *   Descriptions *   Logos *   Links *   Genres *   Program Events (a.k.a. pieces)  MetaPub provides both _National PI documents_ and _Station PI documents_. For both documents, only programs with metadata publishing enabled are listed in the document. As per the RadioDNS specification, the authoritative list of services is defined in the corresponding SI document.  The National PI documents correspond to the services listed in the National SI document (streams and files). This EPG contains two types of programming, live and on-demand (a.k.a files). A \"live with subsequent file (LWSF)\" program may appear in both the streams and files services EPG data because it will both a live stream and an on-demand file. File programs with multi-day air windows will appear in the PI file on every day that the air window is open. That is, the EPG data for each day contains the information about programming available that day, even if the programming is also available on other days. The program ID can be used to resolve these duplicates down to a single instance when processing multiple services or multiple days of EPG data.  The Station PI documents correspond to the services listed in the Station SI document, and list program and schedule metadata for programs which are subscribed to by the given service. Note that stations may opt into \"static\" metadata publishing (station and broadcast service metadata) but not \"dynamic\" metadata publishing (program and schedule metadata). If this is the case, a service that is listed in the Station SI document will not have a corresponding PI document, and a 404 status code will be returned.  Each PI document will contain 24 hours of program guide information. The current day, the previous day, and the next day will contain detailed program event information (a.k.a. Content Depot pieces) while PI files outside of this range will only contain the program (a.k.a Content Depot episode) level information. This may change in the future with the use of an API key as defined by the RadioDNS specification to identify \"trusted\" clients. If metadata for any program in the guide(s) changes, the PI document will be regenerated. Using standard HTTP cache mechanisms, the PI document for the current day can be fetched frequently (e.g. every 5 minutes) to receive last minute changes while future and past days will only be fetched and processed occasionally (e.g. every two hours).  By obtaining the full 24 hour guide, clients such as middleware can build a local database/lookup table of program and program event information that allows for more specific program selection based on user configuration, automation events, and other possible inputs. In the event that MetaPub is unreachable for a short period of time, the client has the full guide to prevent any interruption to the on-air broadcast.  Construction of the URL to the PI document is described in [ETSI TS 102 818 v3.4.1](https://www.etsi.org/deliver/etsi_ts/102800_102899/102818/03.04.01_60/ts_102818v030401p.pdf) section 10.3. Currently, MetaPub only supports PI URLs constructed from SPI SI, as described in [ETSI TS 103 270 v1.4.1](https://www.etsi.org/deliver/etsi_ts/103200_103299/103270/01.04.01_60/ts_103270v010401p.pdf) section 7.  The response will use standard HTTP cache-control headers to indicate when the document should be refreshed as well as an ETag to allow for lightweight change detection. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RadioDNSApi(api_client)
    fqdn = 'fqdn_example' # str | The fully qualified domain name for the environment where the service is running. The fqdn is defined in the `radiodns` element in the SI document in each Content Depot environment.
    sid = 'sid_example' # str | One of the valid service IDs defined in the SI document. For example, \"files\" or \"streams\".
    var_date = 'var_date_example' # str | The PI schedule date to retrieve in format yyyymmdd.
    x_radiodnsspi_api_key = 'x_radiodnsspi_api_key_example' # str | The API client Id you received. This is required for National PI documents, but not Station PI documents. Contact help desk if you need one. (optional)

    try:
        # Get the program information document.
        api_response = api_instance.radiodns_spi31_id_fqdn_sid_date_pi_xml_get(fqdn, sid, var_date, x_radiodnsspi_api_key=x_radiodnsspi_api_key)
        print("The response of RadioDNSApi->radiodns_spi31_id_fqdn_sid_date_pi_xml_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RadioDNSApi->radiodns_spi31_id_fqdn_sid_date_pi_xml_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**| The fully qualified domain name for the environment where the service is running. The fqdn is defined in the &#x60;radiodns&#x60; element in the SI document in each Content Depot environment. | 
 **sid** | **str**| One of the valid service IDs defined in the SI document. For example, \&quot;files\&quot; or \&quot;streams\&quot;. | 
 **var_date** | **str**| The PI schedule date to retrieve in format yyyymmdd. | 
 **x_radiodnsspi_api_key** | **str**| The API client Id you received. This is required for National PI documents, but not Station PI documents. Contact help desk if you need one. | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Program information document for the given 24 hour period. |  -  |
**403** | Authorization failed, the client Id is incorrect. |  -  |
**404** | The program information for the requested day or service cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **radiodns_spi31_si_xml_get**
> str radiodns_spi31_si_xml_get()

Get the service information document.

The service information (SI) document holds a definition of services provided by the service provider (e.g. MetaPub), including any relevant metadata and bearer details, such as:  * Names * Descriptions * Logos * Bearers (broadcast and IP)  MetaPub provides two SI documents. The _National SI document_ describes the distribution services provided by PRSS including basic service metadata, logos, and bearers. The current design defines two IP based services, although this may change in the future:  * Streams     * Bearer ID: prss:streams     * Service ID: streams * Files     * Bearer ID: prss:files     * Service ID: files  The _Station SI document_ describes the stations and broadcast services served by PRSS. Only stations and broadcast services that have opted into metadata publishing are listed in this document.  Based on [ETSI TS 102 818 v3.4.1](https://www.etsi.org/deliver/etsi_ts/102800_102899/102818/03.04.01_60/ts_102818v030401p.pdf) section 10.2.4, the SI document will be placed in a defined location on the service website. Using standard HTTP cache mechanisms, the SI document will only need to be fetched and processed occasionally.  The response will use standard HTTP cache-control headers to indicate when the document should be refreshed as well as an ETag to allow for lightweight change detection. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RadioDNSApi(api_client)

    try:
        # Get the service information document.
        api_response = api_instance.radiodns_spi31_si_xml_get()
        print("The response of RadioDNSApi->radiodns_spi31_si_xml_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RadioDNSApi->radiodns_spi31_si_xml_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service information document is returned in the body of the response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

