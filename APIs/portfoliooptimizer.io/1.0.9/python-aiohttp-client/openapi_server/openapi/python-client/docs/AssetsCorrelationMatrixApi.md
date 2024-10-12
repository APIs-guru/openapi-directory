# openapi_client.AssetsCorrelationMatrixApi

All URIs are relative to *https://api.portfoliooptimizer.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assets_correlation_matrix_bounds_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_bounds_post) | **POST** /assets/correlation/matrix/bounds | Correlation Matrix Bounds
[**assets_correlation_matrix_denoised_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_denoised_post) | **POST** /assets/correlation/matrix/denoised | Denoised Correlation Matrix
[**assets_correlation_matrix_distance_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_distance_post) | **POST** /assets/correlation/matrix/distance | Correlation Matrix Distance
[**assets_correlation_matrix_effective_rank_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_effective_rank_post) | **POST** /assets/correlation/matrix/effective-rank | Correlation Matrix Effective Rank
[**assets_correlation_matrix_informativeness_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_informativeness_post) | **POST** /assets/correlation/matrix/informativeness | Correlation Matrix Informativeness
[**assets_correlation_matrix_nearest_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_nearest_post) | **POST** /assets/correlation/matrix/nearest | Nearest Correlation Matrix
[**assets_correlation_matrix_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_post) | **POST** /assets/correlation/matrix | Correlation Matrix
[**assets_correlation_matrix_random_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_random_post) | **POST** /assets/correlation/matrix/random | Random Correlation Matrix
[**assets_correlation_matrix_shrinkage_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_shrinkage_post) | **POST** /assets/correlation/matrix/shrinkage | Correlation Matrix Shrinkage
[**assets_correlation_matrix_theory_implied_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_theory_implied_post) | **POST** /assets/correlation/matrix/theory-implied | Theory-Implied Correlation Matrix
[**assets_correlation_matrix_validation_post**](AssetsCorrelationMatrixApi.md#assets_correlation_matrix_validation_post) | **POST** /assets/correlation/matrix/validation | Correlation Matrix Validation


# **assets_correlation_matrix_bounds_post**
> AssetsCorrelationMatrixBoundsPost200Response assets_correlation_matrix_bounds_post(body)

Correlation Matrix Bounds

Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.    References  * [Kawee Numpacharoen & Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517). 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_bounds_post200_response import AssetsCorrelationMatrixBoundsPost200Response
from openapi_client.models.assets_correlation_matrix_bounds_post_request import AssetsCorrelationMatrixBoundsPostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":4,"assetsCorrelationMatrix":[[1,-0.55,-0.15,-0.1],[-0.55,1,0.4,0.3],[-0.15,0.4,1,0.5],[-0.1,0.3,0.5,1]],"assetsGroup":[2,3,4]} # AssetsCorrelationMatrixBoundsPostRequest | 

    try:
        # Correlation Matrix Bounds
        api_response = api_instance.assets_correlation_matrix_bounds_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_bounds_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_bounds_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixBoundsPostRequest**](AssetsCorrelationMatrixBoundsPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixBoundsPost200Response**](AssetsCorrelationMatrixBoundsPost200Response.md)

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

# **assets_correlation_matrix_denoised_post**
> AssetsCorrelationMatrixDenoisedPost200Response assets_correlation_matrix_denoised_post(body)

Denoised Correlation Matrix

Compute a denoised asset correlation matrix, using one of the following methods:  * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory    References  * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_denoised_post200_response import AssetsCorrelationMatrixDenoisedPost200Response
from openapi_client.models.assets_correlation_matrix_denoised_post_request import AssetsCorrelationMatrixDenoisedPostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"assetsCorrelationMatrixAspectRatio":0.5} # AssetsCorrelationMatrixDenoisedPostRequest | 

    try:
        # Denoised Correlation Matrix
        api_response = api_instance.assets_correlation_matrix_denoised_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_denoised_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_denoised_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixDenoisedPostRequest**](AssetsCorrelationMatrixDenoisedPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixDenoisedPost200Response**](AssetsCorrelationMatrixDenoisedPost200Response.md)

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

# **assets_correlation_matrix_distance_post**
> AssetsCorrelationMatrixDistancePost200Response assets_correlation_matrix_distance_post(body)

Correlation Matrix Distance

Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the second reference   References  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_distance_post200_response import AssetsCorrelationMatrixDistancePost200Response
from openapi_client.models.assets_correlation_matrix_distance_post_request import AssetsCorrelationMatrixDistancePostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"distanceMetric":"correlationMatrix","referenceCorrelationMatrix":[[1,1,1],[1,1,1],[1,1,1]]} # AssetsCorrelationMatrixDistancePostRequest | 

    try:
        # Correlation Matrix Distance
        api_response = api_instance.assets_correlation_matrix_distance_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_distance_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_distance_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixDistancePostRequest**](AssetsCorrelationMatrixDistancePostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixDistancePost200Response**](AssetsCorrelationMatrixDistancePost200Response.md)

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

# **assets_correlation_matrix_effective_rank_post**
> AssetsCorrelationMatrixEffectiveRankPost200Response assets_correlation_matrix_effective_rank_post(body)

Correlation Matrix Effective Rank

Compute the effective rank of an asset correlation matrix.  References * [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_effective_rank_post200_response import AssetsCorrelationMatrixEffectiveRankPost200Response
from openapi_client.models.assets_correlation_matrix_effective_rank_post_request import AssetsCorrelationMatrixEffectiveRankPostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":2,"assetsCorrelationMatrix":[[1,0],[0,1]]} # AssetsCorrelationMatrixEffectiveRankPostRequest | 

    try:
        # Correlation Matrix Effective Rank
        api_response = api_instance.assets_correlation_matrix_effective_rank_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_effective_rank_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_effective_rank_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixEffectiveRankPostRequest**](AssetsCorrelationMatrixEffectiveRankPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixEffectiveRankPost200Response**](AssetsCorrelationMatrixEffectiveRankPost200Response.md)

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

# **assets_correlation_matrix_informativeness_post**
> AssetsCorrelationMatrixInformativenessPost200Response assets_correlation_matrix_informativeness_post(body)

Correlation Matrix Informativeness

Compute the informativeness of an asset correlation matrix, using one of the following distance metrics: * Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) * Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices * Bures distance, defined in the third reference   References  * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)  * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)  * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_informativeness_post200_response import AssetsCorrelationMatrixInformativenessPost200Response
from openapi_client.models.assets_correlation_matrix_informativeness_post_request import AssetsCorrelationMatrixInformativenessPostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"distanceMetric":"bures"} # AssetsCorrelationMatrixInformativenessPostRequest | 

    try:
        # Correlation Matrix Informativeness
        api_response = api_instance.assets_correlation_matrix_informativeness_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_informativeness_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_informativeness_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixInformativenessPostRequest**](AssetsCorrelationMatrixInformativenessPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixInformativenessPost200Response**](AssetsCorrelationMatrixInformativenessPost200Response.md)

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

# **assets_correlation_matrix_nearest_post**
> AssetsCorrelationMatrixPost200Response assets_correlation_matrix_nearest_post(body)

Nearest Correlation Matrix

Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.  References * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_nearest_post_request import AssetsCorrelationMatrixNearestPostRequest
from openapi_client.models.assets_correlation_matrix_post200_response import AssetsCorrelationMatrixPost200Response
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":3,"assetsApproximateCorrelationMatrix":[[1,1,0],[1,1,1],[0,1,1]]} # AssetsCorrelationMatrixNearestPostRequest | 

    try:
        # Nearest Correlation Matrix
        api_response = api_instance.assets_correlation_matrix_nearest_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_nearest_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_nearest_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixNearestPostRequest**](AssetsCorrelationMatrixNearestPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

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

# **assets_correlation_matrix_post**
> AssetsCorrelationMatrixPost200Response assets_correlation_matrix_post(body)

Correlation Matrix

Compute the Pearson asset correlation matrix from either:   * The asset returns * The asset covariance matrix  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_post200_response import AssetsCorrelationMatrixPost200Response
from openapi_client.models.assets_correlation_matrix_post_request import AssetsCorrelationMatrixPostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":2,"assetsCovarianceMatrix":[[0.01,-0.0025],[-0.0025,0.0025]]} # AssetsCorrelationMatrixPostRequest | 

    try:
        # Correlation Matrix
        api_response = api_instance.assets_correlation_matrix_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixPostRequest**](AssetsCorrelationMatrixPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

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

# **assets_correlation_matrix_random_post**
> AssetsCorrelationMatrixPost200Response assets_correlation_matrix_random_post(body)

Random Correlation Matrix

Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.  References * [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_post200_response import AssetsCorrelationMatrixPost200Response
from openapi_client.models.assets_correlation_matrix_random_post_request import AssetsCorrelationMatrixRandomPostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":2} # AssetsCorrelationMatrixRandomPostRequest | 

    try:
        # Random Correlation Matrix
        api_response = api_instance.assets_correlation_matrix_random_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_random_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_random_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixRandomPostRequest**](AssetsCorrelationMatrixRandomPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

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

# **assets_correlation_matrix_shrinkage_post**
> AssetsCorrelationMatrixPost200Response assets_correlation_matrix_shrinkage_post(body)

Correlation Matrix Shrinkage

Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:    * An equicorrelation matrix made of 1  * An equicorrelation matrix made of 0  * An equicorrelation matrix made of -1/(n-1), with n the number of assets  * A provided correlation matrix    References  * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_post200_response import AssetsCorrelationMatrixPost200Response
from openapi_client.models.assets_correlation_matrix_shrinkage_post_request import AssetsCorrelationMatrixShrinkagePostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":3,"assetsCorrelationMatrix":[[1,0.5,0.9],[0.5,1,0.7],[0.9,0.7,1]],"shrinkageFactor":0.5,"targetCorrelationMatrix":[[1,0,0],[0,1,0],[0,0,1]]} # AssetsCorrelationMatrixShrinkagePostRequest | 

    try:
        # Correlation Matrix Shrinkage
        api_response = api_instance.assets_correlation_matrix_shrinkage_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_shrinkage_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_shrinkage_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixShrinkagePostRequest**](AssetsCorrelationMatrixShrinkagePostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

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

# **assets_correlation_matrix_theory_implied_post**
> AssetsCorrelationMatrixPost200Response assets_correlation_matrix_theory_implied_post(body)

Theory-Implied Correlation Matrix

Compute the theory-implied asset correlation matrix associated with: * A hierarchical classification of a universe of assets * An asset correlation matrix  References * [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3484152) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_post200_response import AssetsCorrelationMatrixPost200Response
from openapi_client.models.assets_correlation_matrix_theory_implied_post_request import AssetsCorrelationMatrixTheoryImpliedPostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":[{"assetHierarchicalClassification":[35,3510,351010,35101010]},{"assetHierarchicalClassification":[20,2030,203020,20302010]}],"assetsCorrelationMatrix":[[1,-3.5E-4],[-3.5E-4,1]]} # AssetsCorrelationMatrixTheoryImpliedPostRequest | 

    try:
        # Theory-Implied Correlation Matrix
        api_response = api_instance.assets_correlation_matrix_theory_implied_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_theory_implied_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_theory_implied_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixTheoryImpliedPostRequest**](AssetsCorrelationMatrixTheoryImpliedPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixPost200Response**](AssetsCorrelationMatrixPost200Response.md)

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

# **assets_correlation_matrix_validation_post**
> AssetsCorrelationMatrixValidationPost200Response assets_correlation_matrix_validation_post(body)

Correlation Matrix Validation

Validate whether a matrix is an asset correlation matrix.  References * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) 

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.assets_correlation_matrix_validation_post200_response import AssetsCorrelationMatrixValidationPost200Response
from openapi_client.models.assets_correlation_matrix_validation_post_request import AssetsCorrelationMatrixValidationPostRequest
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
    api_instance = openapi_client.AssetsCorrelationMatrixApi(api_client)
    body = {"assets":2,"assetsCorrelationMatrix":[[1,-3.5E-4],[-3.5E-4,1]]} # AssetsCorrelationMatrixValidationPostRequest | 

    try:
        # Correlation Matrix Validation
        api_response = api_instance.assets_correlation_matrix_validation_post(body)
        print("The response of AssetsCorrelationMatrixApi->assets_correlation_matrix_validation_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetsCorrelationMatrixApi->assets_correlation_matrix_validation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AssetsCorrelationMatrixValidationPostRequest**](AssetsCorrelationMatrixValidationPostRequest.md)|  | 

### Return type

[**AssetsCorrelationMatrixValidationPost200Response**](AssetsCorrelationMatrixValidationPost200Response.md)

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

