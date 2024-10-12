# openapi_client.DefaultApi

All URIs are relative to *https://api.ecowetter.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_history_get**](DefaultApi.md#public_history_get) | **GET** /public/history | Wetter 2021 für Berlin, Reichstag


# **public_history_get**
> object public_history_get(q=q, var_from=var_from, to=to)

Wetter 2021 für Berlin, Reichstag

Abfrage der Wettervorhersage für einen Ort, der entweder durch Angabe eines Suchbegriffs mit dem Parameter `q` oder durch Geo-Koordinaten in den Parametern `lat` und `lon` spezifiziert wird.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ecowetter.de
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ecowetter.de"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    q = 'Berlin, Reichstag' # str | Ortssuche mit Freitext (optional)
    var_from = '2021-01-01' # str | Startdatum der Abfrage im Format (JJJJ-MM-DD) (optional)
    to = '2022-01-01' # str | Enddatum der Abfrage im Format (JJJJ-MM-DD) (optional)

    try:
        # Wetter 2021 für Berlin, Reichstag
        api_response = api_instance.public_history_get(q=q, var_from=var_from, to=to)
        print("The response of DefaultApi->public_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->public_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Ortssuche mit Freitext | [optional] 
 **var_from** | **str**| Startdatum der Abfrage im Format (JJJJ-MM-DD) | [optional] 
 **to** | **str**| Enddatum der Abfrage im Format (JJJJ-MM-DD) | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * CF-Cache-Status -  <br>  * CF-RAY -  <br>  * Connection -  <br>  * Content-Encoding -  <br>  * Content-Type -  <br>  * Date -  <br>  * NEL -  <br>  * Report-To -  <br>  * Server -  <br>  * Transfer-Encoding -  <br>  * access-control-allow-origin -  <br>  * alt-svc -  <br>  * etag -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-request-compute -  <br>  * x-request-id -  <br>  * x-request-transfer -  <br>  * x-served-by -  <br>  * x-sessioncredit-compute -  <br>  * x-sessioncredit-start -  <br>  * x-sessioncredit-transfer -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

