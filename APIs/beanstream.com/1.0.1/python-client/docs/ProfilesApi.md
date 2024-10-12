# openapi_client.ProfilesApi

All URIs are relative to *https://www.beanstream.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profiles_post**](ProfilesApi.md#profiles_post) | **POST** /profiles | Create Profile
[**profiles_profile_id_cards_card_id_delete**](ProfilesApi.md#profiles_profile_id_cards_card_id_delete) | **DELETE** /profiles/{profileId}/cards/{cardId} | Delete card
[**profiles_profile_id_cards_card_id_put**](ProfilesApi.md#profiles_profile_id_cards_card_id_put) | **PUT** /profiles/{profileId}/cards/{cardId} | Update card
[**profiles_profile_id_cards_get**](ProfilesApi.md#profiles_profile_id_cards_get) | **GET** /profiles/{profileId}/cards | Get cards
[**profiles_profile_id_cards_post**](ProfilesApi.md#profiles_profile_id_cards_post) | **POST** /profiles/{profileId}/cards | Add card
[**profiles_profile_id_delete**](ProfilesApi.md#profiles_profile_id_delete) | **DELETE** /profiles/{profileId} | Delete profile
[**profiles_profile_id_get**](ProfilesApi.md#profiles_profile_id_get) | **GET** /profiles/{profileId} | Get profile
[**profiles_profile_id_put**](ProfilesApi.md#profiles_profile_id_put) | **PUT** /profiles/{profileId} | Update Profile


# **profiles_post**
> ProfileResponse profiles_post(create_profile_body)

Create Profile

Create a new Payment Profile using either a card or a Legato token. You must supply one of them.

### Example


```python
import openapi_client
from openapi_client.models.create_profile_body import CreateProfileBody
from openapi_client.models.profile_response import ProfileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfilesApi(api_client)
    create_profile_body = openapi_client.CreateProfileBody() # CreateProfileBody | 

    try:
        # Create Profile
        api_response = api_instance.profiles_post(create_profile_body)
        print("The response of ProfilesApi->profiles_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_profile_body** | [**CreateProfileBody**](CreateProfileBody.md)|  | 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Profile. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_profile_id_cards_card_id_delete**
> ProfileResponse profiles_profile_id_cards_card_id_delete(profile_id, card_id)

Delete card

Delete a card on the profile.

### Example


```python
import openapi_client
from openapi_client.models.profile_response import ProfileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfilesApi(api_client)
    profile_id = 'profile_id_example' # str | The profile id. (aka CustomerCode)
    card_id = 3.4 # float | The card id.

    try:
        # Delete card
        api_response = api_instance.profiles_profile_id_cards_card_id_delete(profile_id, card_id)
        print("The response of ProfilesApi->profiles_profile_id_cards_card_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_profile_id_cards_card_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The profile id. (aka CustomerCode) | 
 **card_id** | **float**| The card id. | 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Profile. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_profile_id_cards_card_id_put**
> ProfileResponse profiles_profile_id_cards_card_id_put(profile_id, card_id, card)

Update card

Update the details of a card on the profile.

### Example


```python
import openapi_client
from openapi_client.models.profile_card import ProfileCard
from openapi_client.models.profile_response import ProfileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfilesApi(api_client)
    profile_id = 'profile_id_example' # str | The profile id. (aka CustomerCode)
    card_id = 3.4 # float | The card id.
    card = openapi_client.ProfileCard() # ProfileCard | The card that will be updated on the profile.

    try:
        # Update card
        api_response = api_instance.profiles_profile_id_cards_card_id_put(profile_id, card_id, card)
        print("The response of ProfilesApi->profiles_profile_id_cards_card_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_profile_id_cards_card_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The profile id. (aka CustomerCode) | 
 **card_id** | **float**| The card id. | 
 **card** | [**ProfileCard**](ProfileCard.md)| The card that will be updated on the profile. | 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Profile. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_profile_id_cards_get**
> ProfileGetCards profiles_profile_id_cards_get(profile_id)

Get cards

Get all of the cards on the profile.

### Example


```python
import openapi_client
from openapi_client.models.profile_get_cards import ProfileGetCards
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfilesApi(api_client)
    profile_id = 'profile_id_example' # str | The profile id. (aka CustomerCode)

    try:
        # Get cards
        api_response = api_instance.profiles_profile_id_cards_get(profile_id)
        print("The response of ProfilesApi->profiles_profile_id_cards_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_profile_id_cards_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The profile id. (aka CustomerCode) | 

### Return type

[**ProfileGetCards**](ProfileGetCards.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Profile. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_profile_id_cards_post**
> ProfileResponse profiles_profile_id_cards_post(profile_id, card)

Add card

Add a card to the profile. Note that there is a default limit of 1 card per profile. You can change this in your Profiles settings in the back office.

### Example


```python
import openapi_client
from openapi_client.models.profile_card import ProfileCard
from openapi_client.models.profile_response import ProfileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfilesApi(api_client)
    profile_id = 'profile_id_example' # str | The profile id. (aka CustomerCode)
    card = openapi_client.ProfileCard() # ProfileCard | The card that will be added to the profile.

    try:
        # Add card
        api_response = api_instance.profiles_profile_id_cards_post(profile_id, card)
        print("The response of ProfilesApi->profiles_profile_id_cards_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_profile_id_cards_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The profile id. (aka CustomerCode) | 
 **card** | [**ProfileCard**](ProfileCard.md)| The card that will be added to the profile. | 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Profile. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_profile_id_delete**
> ProfileResponse profiles_profile_id_delete(profile_id)

Delete profile

Delete a Payment Profile using the profile ID, also known as the Customer Code.

### Example


```python
import openapi_client
from openapi_client.models.profile_response import ProfileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfilesApi(api_client)
    profile_id = 'profile_id_example' # str | The profile id. (aka CustomerCode)

    try:
        # Delete profile
        api_response = api_instance.profiles_profile_id_delete(profile_id)
        print("The response of ProfilesApi->profiles_profile_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_profile_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The profile id. (aka CustomerCode) | 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Profile. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_profile_id_get**
> PaymentProfile profiles_profile_id_get(profile_id)

Get profile

Get a Payment Profile using the profile ID, also known as the Customer Code.

### Example


```python
import openapi_client
from openapi_client.models.payment_profile import PaymentProfile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfilesApi(api_client)
    profile_id = 'profile_id_example' # str | The profile id. (aka CustomerCode)

    try:
        # Get profile
        api_response = api_instance.profiles_profile_id_get(profile_id)
        print("The response of ProfilesApi->profiles_profile_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_profile_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The profile id. (aka CustomerCode) | 

### Return type

[**PaymentProfile**](PaymentProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Profile. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_profile_id_put**
> ProfileResponse profiles_profile_id_put(profile_id, update_profile_body)

Update Profile

Create a new Payment Profile using either a card or a Legato token. You must supply one of them.

### Example


```python
import openapi_client
from openapi_client.models.profile_response import ProfileResponse
from openapi_client.models.update_profile_body import UpdateProfileBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.beanstream.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.beanstream.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfilesApi(api_client)
    profile_id = 'profile_id_example' # str | The profile id. (aka CustomerCode)
    update_profile_body = openapi_client.UpdateProfileBody() # UpdateProfileBody | 

    try:
        # Update Profile
        api_response = api_instance.profiles_profile_id_put(profile_id, update_profile_body)
        print("The response of ProfilesApi->profiles_profile_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->profiles_profile_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| The profile id. (aka CustomerCode) | 
 **update_profile_body** | [**UpdateProfileBody**](UpdateProfileBody.md)|  | 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Profile. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication Failure |  -  |
**402** | Business Rule Violation or Decline |  -  |
**403** | Authorization Failure |  -  |
**405** | Invalid Request Method |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

