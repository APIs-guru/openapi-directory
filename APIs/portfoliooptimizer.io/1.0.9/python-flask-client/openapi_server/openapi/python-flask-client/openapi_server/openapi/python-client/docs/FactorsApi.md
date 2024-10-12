# openapi_client.FactorsApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**factors_residualization_post**](FactorsApi.md#factors_residualization_post) | **POST** /factors/residualization | Residualization


# **factors_residualization_post**
> FactorsResidualizationPost200Response factors_residualization_post(body)

Residualization

Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.  References * [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/) * [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.factors_residualization_post200_response import FactorsResidualizationPost200Response
from openapi_client.models.factors_residualization_post_request import FactorsResidualizationPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.portfoliooptimizer.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.portfoliooptimizer.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FactorsApi(api_client)
    body = {"factors":[{"factorReturns":[0.01,0.02,-0.01]},{"factorReturns":[0.025,0.005,-0.02]}],"residualizedFactor":1} # FactorsResidualizationPostRequest | 

    try:
        # Residualization
        api_response = api_instance.factors_residualization_post(body)
        print("The response of FactorsApi->factors_residualization_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FactorsApi->factors_residualization_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FactorsResidualizationPostRequest**](FactorsResidualizationPostRequest.md)|  | 

### Return type

[**FactorsResidualizationPost200Response**](FactorsResidualizationPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

