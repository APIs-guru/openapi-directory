# openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actor_get**](CastCrewCastCrewInMoviesTelevisionShowsApi.md#actor_get) | **GET** /Actors/Search/{accesstoken}/{Query} | Returns data on queried actor/actress. Result set limited to 5 records
[**actor_in_shows_get**](CastCrewCastCrewInMoviesTelevisionShowsApi.md#actor_in_shows_get) | **GET** /Cast/ActorBySearch/{AccessToken}/{Actor} | Returns all shows queried actor/actress is or has been in
[**actors_in_tv_show_get**](CastCrewCastCrewInMoviesTelevisionShowsApi.md#actors_in_tv_show_get) | **GET** /Cast/ByTVShow/{accesstoken}/{ShowName} | Returns all actors in queried tvshow
[**add_actor_post**](CastCrewCastCrewInMoviesTelevisionShowsApi.md#add_actor_post) | **POST** /AddActor | Add new actor or actress to database
[**cast_by_actor_get**](CastCrewCastCrewInMoviesTelevisionShowsApi.md#cast_by_actor_get) | **GET** /Cast/ByActor/{AccessToken}/{Actor} | Returns list of show actor is appearing in
[**crew_by_id_get**](CastCrewCastCrewInMoviesTelevisionShowsApi.md#crew_by_id_get) | **GET** /Crew/ByID/{AccessToken}/{ID} | Get crew list by ID
[**crew_by_person_get**](CastCrewCastCrewInMoviesTelevisionShowsApi.md#crew_by_person_get) | **GET** /Crew/ByPerson/{AccessToken}/{PersonName} | Gets list of productions searched person is/was involved in.
[**crew_get**](CastCrewCastCrewInMoviesTelevisionShowsApi.md#crew_get) | **GET** /Crew/Search/{AccessToken}/{Phrase} | Returns crew for queried show.
[**crewby_showname_get**](CastCrewCastCrewInMoviesTelevisionShowsApi.md#crewby_showname_get) | **GET** /Crew/ByShowName/{AccessToken}/{ShowName} | Get crew list by showname


# **actor_get**
> List[Actor] actor_get(accesstoken, query)

Returns data on queried actor/actress. Result set limited to 5 records

### Example


```python
import openapi_client
from openapi_client.models.actor import Actor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi(api_client)
    accesstoken = 'accesstoken_example' # str | 
    query = 'query_example' # str | 

    try:
        # Returns data on queried actor/actress. Result set limited to 5 records
        api_response = api_instance.actor_get(accesstoken, query)
        print("The response of CastCrewCastCrewInMoviesTelevisionShowsApi->actor_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CastCrewCastCrewInMoviesTelevisionShowsApi->actor_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accesstoken** | **str**|  | 
 **query** | **str**|  | 

### Return type

[**List[Actor]**](Actor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Actors |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actor_in_shows_get**
> List[TVShowActor] actor_in_shows_get(access_token, actor)

Returns all shows queried actor/actress is or has been in

### Example


```python
import openapi_client
from openapi_client.models.tv_show_actor import TVShowActor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    actor = 'actor_example' # str | Part of, or full name of actor

    try:
        # Returns all shows queried actor/actress is or has been in
        api_response = api_instance.actor_in_shows_get(access_token, actor)
        print("The response of CastCrewCastCrewInMoviesTelevisionShowsApi->actor_in_shows_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CastCrewCastCrewInMoviesTelevisionShowsApi->actor_in_shows_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **actor** | **str**| Part of, or full name of actor | 

### Return type

[**List[TVShowActor]**](TVShowActor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of actors in show |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actors_in_tv_show_get**
> List[TVShowActor] actors_in_tv_show_get(accesstoken, show_name)

Returns all actors in queried tvshow

### Example


```python
import openapi_client
from openapi_client.models.tv_show_actor import TVShowActor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi(api_client)
    accesstoken = 'accesstoken_example' # str | 
    show_name = 'show_name_example' # str | 

    try:
        # Returns all actors in queried tvshow
        api_response = api_instance.actors_in_tv_show_get(accesstoken, show_name)
        print("The response of CastCrewCastCrewInMoviesTelevisionShowsApi->actors_in_tv_show_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CastCrewCastCrewInMoviesTelevisionShowsApi->actors_in_tv_show_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accesstoken** | **str**|  | 
 **show_name** | **str**|  | 

### Return type

[**List[TVShowActor]**](TVShowActor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of actors in show |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_actor_post**
> PostResult add_actor_post(value)

Add new actor or actress to database

### Example


```python
import openapi_client
from openapi_client.models.actor_post import ActorPost
from openapi_client.models.post_result import PostResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi(api_client)
    value = openapi_client.ActorPost() # ActorPost | 

    try:
        # Add new actor or actress to database
        api_response = api_instance.add_actor_post(value)
        print("The response of CastCrewCastCrewInMoviesTelevisionShowsApi->add_actor_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CastCrewCastCrewInMoviesTelevisionShowsApi->add_actor_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**ActorPost**](ActorPost.md)|  | 

### Return type

[**PostResult**](PostResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Result |  -  |
**204** | Result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cast_by_actor_get**
> List[TVShowActor] cast_by_actor_get(access_token, actor)

Returns list of show actor is appearing in

### Example


```python
import openapi_client
from openapi_client.models.tv_show_actor import TVShowActor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    actor = 'actor_example' # str | Full name of actor

    try:
        # Returns list of show actor is appearing in
        api_response = api_instance.cast_by_actor_get(access_token, actor)
        print("The response of CastCrewCastCrewInMoviesTelevisionShowsApi->cast_by_actor_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CastCrewCastCrewInMoviesTelevisionShowsApi->cast_by_actor_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **actor** | **str**| Full name of actor | 

### Return type

[**List[TVShowActor]**](TVShowActor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of shows Actor is appearing in |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crew_by_id_get**
> List[Crew] crew_by_id_get(access_token, id)

Get crew list by ID

### Example


```python
import openapi_client
from openapi_client.models.crew import Crew
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    id = 'id_example' # str | IMDBID, TVmazeID, or TVDBID

    try:
        # Get crew list by ID
        api_response = api_instance.crew_by_id_get(access_token, id)
        print("The response of CastCrewCastCrewInMoviesTelevisionShowsApi->crew_by_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CastCrewCastCrewInMoviesTelevisionShowsApi->crew_by_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **id** | **str**| IMDBID, TVmazeID, or TVDBID | 

### Return type

[**List[Crew]**](Crew.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of crew |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crew_by_person_get**
> List[Crew] crew_by_person_get(access_token, person_name)

Gets list of productions searched person is/was involved in.

### Example


```python
import openapi_client
from openapi_client.models.crew import Crew
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    person_name = 'person_name_example' # str | 

    try:
        # Gets list of productions searched person is/was involved in.
        api_response = api_instance.crew_by_person_get(access_token, person_name)
        print("The response of CastCrewCastCrewInMoviesTelevisionShowsApi->crew_by_person_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CastCrewCastCrewInMoviesTelevisionShowsApi->crew_by_person_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **person_name** | **str**|  | 

### Return type

[**List[Crew]**](Crew.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of crew |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crew_get**
> List[Crew] crew_get(access_token, phrase)

Returns crew for queried show.

### Example


```python
import openapi_client
from openapi_client.models.crew import Crew
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    phrase = 'phrase_example' # str | Part of, or full showname to search for

    try:
        # Returns crew for queried show.
        api_response = api_instance.crew_get(access_token, phrase)
        print("The response of CastCrewCastCrewInMoviesTelevisionShowsApi->crew_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CastCrewCastCrewInMoviesTelevisionShowsApi->crew_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **phrase** | **str**| Part of, or full showname to search for | 

### Return type

[**List[Crew]**](Crew.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of crew |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crewby_showname_get**
> List[Crew] crewby_showname_get(access_token, show_name)

Get crew list by showname

### Example


```python
import openapi_client
from openapi_client.models.crew import Crew
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CastCrewCastCrewInMoviesTelevisionShowsApi(api_client)
    access_token = 'access_token_example' # str | 
    show_name = 'show_name_example' # str | Full exact showname

    try:
        # Get crew list by showname
        api_response = api_instance.crewby_showname_get(access_token, show_name)
        print("The response of CastCrewCastCrewInMoviesTelevisionShowsApi->crewby_showname_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CastCrewCastCrewInMoviesTelevisionShowsApi->crewby_showname_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **show_name** | **str**| Full exact showname | 

### Return type

[**List[Crew]**](Crew.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of crew |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

