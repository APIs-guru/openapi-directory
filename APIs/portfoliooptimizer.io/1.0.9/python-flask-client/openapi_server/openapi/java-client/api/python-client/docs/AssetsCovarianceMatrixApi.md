# openapi_client.AssetsCovarianceMatrixApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_covariance_matrix_effective_rank_post**](AssetsCovarianceMatrixApi.md#assets_covariance_matrix_effective_rank_post) | **POST** /assets/covariance/matrix/effective-rank | Covariance Matrix Effective Rank
[**assets_covariance_matrix_exponentially_weighted_post**](AssetsCovarianceMatrixApi.md#assets_covariance_matrix_exponentially_weighted_post) | **POST** /assets/covariance/matrix/exponentially-weighted | Exponentially Weighted Covariance Matrix
[**assets_covariance_matrix_post**](AssetsCovarianceMatrixApi.md#assets_covariance_matrix_post) | **POST** /assets/covariance/matrix | Covariance Matrix
[**assets_covariance_matrix_validation_post**](AssetsCovarianceMatrixApi.md#assets_covariance_matrix_validation_post) | **POST** /assets/covariance/matrix/validation | Covariance Matrix Validation


# **assets_covariance_matrix_effective_rank_post**
> AssetsCovarianceMatrixEffectiveRankPost200Response assets_covariance_matrix_effective_rank_post(body)

Covariance Matrix Effective Rank

Compute the effective rank of an asset covariance matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_covariance_matrix_effective_rank_post200_response import AssetsCovarianceMatrixEffectiveRankPost200Response
from openapi_client.models.assets_covariance_matrix_effective_rank_post_request import AssetsCovarianceMatrixEffectiveRankPostRequest
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
    api_instance = openapi_client.AssetsCovarianceMatrixApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[3.5E-4,-3.5E-4],[-3.5E-4,3.5E-4]]} # AssetsCovarianceMatrixEffectiveRankPostRequest | 

    try:
        # Covariance Matrix Effective Rank
        api_response = api_instance.assets_covariance_matrix_effective_rank_post(body)
        print("The response of AssetsCovarianceMatrixApi->assets_covariance_matrix_effective_rank_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCovarianceMatrixApi->assets_covariance_matrix_effective_rank_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCovarianceMatrixEffectiveRankPostRequest**](AssetsCovarianceMatrixEffectiveRankPostRequest.md)|  | 

### Return type

[**AssetsCovarianceMatrixEffectiveRankPost200Response**](AssetsCovarianceMatrixEffectiveRankPost200Response.md)

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

# **assets_covariance_matrix_exponentially_weighted_post**
> AssetsCovarianceMatrixExponentiallyWeightedPost200Response assets_covariance_matrix_exponentially_weighted_post(body)

Exponentially Weighted Covariance Matrix

Compute an exponentially weighted covariance matrix of assets returns.  References * [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_covariance_matrix_exponentially_weighted_post200_response import AssetsCovarianceMatrixExponentiallyWeightedPost200Response
from openapi_client.models.assets_covariance_matrix_exponentially_weighted_post_request import AssetsCovarianceMatrixExponentiallyWeightedPostRequest
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
    api_instance = openapi_client.AssetsCovarianceMatrixApi(api_client)
    body = {"assets":[{"assetReturns":[0.01,0.01,0.02,0.01]},{"assetReturns":[-0.02,-0.02,-0.04,-0.02]}],"decayFactor":0.5} # AssetsCovarianceMatrixExponentiallyWeightedPostRequest | 

    try:
        # Exponentially Weighted Covariance Matrix
        api_response = api_instance.assets_covariance_matrix_exponentially_weighted_post(body)
        print("The response of AssetsCovarianceMatrixApi->assets_covariance_matrix_exponentially_weighted_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCovarianceMatrixApi->assets_covariance_matrix_exponentially_weighted_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCovarianceMatrixExponentiallyWeightedPostRequest**](AssetsCovarianceMatrixExponentiallyWeightedPostRequest.md)|  | 

### Return type

[**AssetsCovarianceMatrixExponentiallyWeightedPost200Response**](AssetsCovarianceMatrixExponentiallyWeightedPost200Response.md)

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

# **assets_covariance_matrix_post**
> AssetsCovarianceMatrixPost200Response assets_covariance_matrix_post(body)

Covariance Matrix

Compute the covariance matrix of assets from either:   * The asset correlation matrix and their volatilities (i.e., standard deviations) * The asset correlation matrix and their variances * The asset returns  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_covariance_matrix_post200_response import AssetsCovarianceMatrixPost200Response
from openapi_client.models.assets_covariance_matrix_post_request import AssetsCovarianceMatrixPostRequest
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
    api_instance = openapi_client.AssetsCovarianceMatrixApi(api_client)
    body = {"assets":2,"assetsCorrelationMatrix":[[1,-0.5],[-0.5,1]],"assetsVolatilities":[0.1,0.05]} # AssetsCovarianceMatrixPostRequest | 

    try:
        # Covariance Matrix
        api_response = api_instance.assets_covariance_matrix_post(body)
        print("The response of AssetsCovarianceMatrixApi->assets_covariance_matrix_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCovarianceMatrixApi->assets_covariance_matrix_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCovarianceMatrixPostRequest**](AssetsCovarianceMatrixPostRequest.md)|  | 

### Return type

[**AssetsCovarianceMatrixPost200Response**](AssetsCovarianceMatrixPost200Response.md)

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

# **assets_covariance_matrix_validation_post**
> AssetsCovarianceMatrixValidationPost200Response assets_covariance_matrix_validation_post(body)

Covariance Matrix Validation

Validate whether a matrix is a covariance matrix.  References * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_post_request_one_of1 import AssetsCorrelationMatrixPostRequestOneOf1
from openapi_client.models.assets_covariance_matrix_validation_post200_response import AssetsCovarianceMatrixValidationPost200Response
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
    api_instance = openapi_client.AssetsCovarianceMatrixApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[3.5E-4,-3.5E-4],[-3.5E-4,3.5E-4]]} # AssetsCorrelationMatrixPostRequestOneOf1 | 

    try:
        # Covariance Matrix Validation
        api_response = api_instance.assets_covariance_matrix_validation_post(body)
        print("The response of AssetsCovarianceMatrixApi->assets_covariance_matrix_validation_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCovarianceMatrixApi->assets_covariance_matrix_validation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixPostRequestOneOf1**](AssetsCorrelationMatrixPostRequestOneOf1.md)|  | 

### Return type

[**AssetsCovarianceMatrixValidationPost200Response**](AssetsCovarianceMatrixValidationPost200Response.md)

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

