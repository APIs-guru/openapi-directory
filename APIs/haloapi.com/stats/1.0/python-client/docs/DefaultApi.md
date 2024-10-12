# openapi_client.DefaultApi

All URIs are relative to *https://www.haloapi.com/stats*

Method | HTTP request | Description
------------- | ------------- | -------------
[**halo5_company**](DefaultApi.md#halo5_company) | **GET** /h5/companies/{companyId} | Halo 5 - Company
[**halo5_company_commendations**](DefaultApi.md#halo5_company_commendations) | **GET** /h5/companies/{companyId}/commendations | Halo 5 - Company Commendations
[**halo5_leaderboard_player_csr**](DefaultApi.md#halo5_leaderboard_player_csr) | **GET** /h5/player-leaderboards/csr/{seasonId}/{playlistId} | Halo 5 - Leaderboard - Player CSR
[**halo5_match_events**](DefaultApi.md#halo5_match_events) | **GET** /h5/matches/{matchId}/events | Halo 5 - Match Events
[**halo5_match_result_arena**](DefaultApi.md#halo5_match_result_arena) | **GET** /h5/arena/matches/{matchId} | Halo 5 - Match Result - Arena
[**halo5_match_result_campaign**](DefaultApi.md#halo5_match_result_campaign) | **GET** /h5/campaign/matches/{matchId} | Halo 5 - Match Result - Campaign
[**halo5_match_result_custom**](DefaultApi.md#halo5_match_result_custom) | **GET** /h5/custom/matches/{matchId} | Halo 5 - Match Result - Custom
[**halo5_match_result_custom_local**](DefaultApi.md#halo5_match_result_custom_local) | **GET** /h5/customlocal/matches/{matchId} | Halo 5 - Match Result - Custom Local
[**halo5_match_result_warzone**](DefaultApi.md#halo5_match_result_warzone) | **GET** /h5/warzone/matches/{matchId} | Halo 5 - Match Result - Warzone
[**halo5_pc_match_result_custom**](DefaultApi.md#halo5_pc_match_result_custom) | **GET** /h5pc/custom/matches/{matchId} | Halo 5 PC - Match Result - Custom
[**halo5_pc_player_match_history**](DefaultApi.md#halo5_pc_player_match_history) | **GET** /h5pc/players/{player}/matches | Halo 5 PC - Player Match History
[**halo5_pc_player_service_records_custom**](DefaultApi.md#halo5_pc_player_service_records_custom) | **GET** /h5pc/servicerecords/custom | Halo 5 PC - Player Service Records - Custom
[**halo5_player_commendations**](DefaultApi.md#halo5_player_commendations) | **GET** /h5/players/{player}/commendations | Halo 5 - Player Commendations
[**halo5_player_match_history**](DefaultApi.md#halo5_player_match_history) | **GET** /h5/players/{player}/matches | Halo 5 - Player Match History
[**halo5_player_service_records_arena**](DefaultApi.md#halo5_player_service_records_arena) | **GET** /h5/servicerecords/arena | Halo 5 - Player Service Records - Arena
[**halo5_player_service_records_campaign**](DefaultApi.md#halo5_player_service_records_campaign) | **GET** /h5/servicerecords/campaign | Halo 5 - Player Service Records - Campaign
[**halo5_player_service_records_custom**](DefaultApi.md#halo5_player_service_records_custom) | **GET** /h5/servicerecords/custom | Halo 5 - Player Service Records - Custom
[**halo5_player_service_records_custom_local**](DefaultApi.md#halo5_player_service_records_custom_local) | **GET** /h5/servicerecords/customlocal | Halo 5 - Player Service Records - Custom Local
[**halo5_player_service_records_warzone**](DefaultApi.md#halo5_player_service_records_warzone) | **GET** /h5/servicerecords/warzone | Halo 5 - Player Service Records - Warzone
[**halo_wars2_leaderboard_player_csr**](DefaultApi.md#halo_wars2_leaderboard_player_csr) | **GET** /hw2/player-leaderboards/csr/{seasonId}/{playlistId} | Halo Wars 2 - Leaderboard - Player CSR
[**halo_wars2_match_events**](DefaultApi.md#halo_wars2_match_events) | **GET** /hw2/matches/{matchId}/events | Halo Wars 2 - Match Events
[**halo_wars2_match_result**](DefaultApi.md#halo_wars2_match_result) | **GET** /hw2/matches/{matchId} | Halo Wars 2 - Match Result
[**halo_wars2_player_campaign_progress**](DefaultApi.md#halo_wars2_player_campaign_progress) | **GET** /hw2/players/{player}/campaign-progress | Halo Wars 2 - Player Campaign Progress
[**halo_wars2_player_match_history**](DefaultApi.md#halo_wars2_player_match_history) | **GET** /hw2/players/{player}/matches | Halo Wars 2 - Player Match History
[**halo_wars2_player_playlist_ratings**](DefaultApi.md#halo_wars2_player_playlist_ratings) | **GET** /hw2/playlist/{playlistId}/rating | Halo Wars 2 - Player Playlist Ratings
[**halo_wars2_player_season_stats_summary**](DefaultApi.md#halo_wars2_player_season_stats_summary) | **GET** /hw2/players/{player}/stats/seasons/{seasonId} | Halo Wars 2 - Player Season Stats Summary
[**halo_wars2_player_stats_summary**](DefaultApi.md#halo_wars2_player_stats_summary) | **GET** /hw2/players/{player}/stats | Halo Wars 2 - Player Stats Summary
[**halo_wars2_player_xps**](DefaultApi.md#halo_wars2_player_xps) | **GET** /hw2/xp | Halo Wars 2 - Player XPs


# **halo5_company**
> halo5_company(company_id)

Halo 5 - Company

<p>Retrieves information about the Company. The response will contain the Company's name, status, and members.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>July 14, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    company_id = 'company_id_example' # str | The ID for the Company. The Company ID for a player can be retrieved from the Profile APIs via the \"Halo 5 - Player Apperance\" Endpoint.

    try:
        # Halo 5 - Company
        api_instance.halo5_company(company_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_company: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| The ID for the Company. The Company ID for a player can be retrieved from the Profile APIs via the \&quot;Halo 5 - Player Apperance\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Company name, status, and members. |  -  |
**404** | Specified Company was not found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_company_commendations**
> halo5_company_commendations(company_id)

Halo 5 - Company Commendations

<p>Retrieves the commendation state for a Company.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>July 14, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    company_id = 'company_id_example' # str | The ID for the Company. The Company ID for a player can be retrieved from the Profile APIs via the \"Halo 5 - Player Apperance\" Endpoint.

    try:
        # Halo 5 - Company Commendations
        api_instance.halo5_company_commendations(company_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_company_commendations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| The ID for the Company. The Company ID for a player can be retrieved from the Profile APIs via the \&quot;Halo 5 - Player Apperance\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the commendation state for the Company. |  -  |
**404** | Specified Company was not found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_leaderboard_player_csr**
> halo5_leaderboard_player_csr(season_id, playlist_id, count=count)

Halo 5 - Leaderboard - Player CSR

<p>Retrieves the Leaderboard for Player CSRs. The Leaderboard consists of the top Players with a CSR of 1800 or above for a given Playlist in a Season.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>March 6, 2018:</strong></p>     <ul>         <li>Fixed documentation typos for the names of the \"Player\" and \"Gamertag\" properties.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>July 31, 2017:</strong></p>     <ul>         <li>Clarified documentation for which players are included in the leaderboard.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Player Leaderboard\" to \"Halo 5 - Leaderboard Player CSR\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    season_id = 'season_id_example' # str | The ID for the Season.
    playlist_id = 'playlist_id_example' # str | The ID for the Playlist.
    count = 3.4 # float | When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 200 is assumed.  When the value contains a non-digit or is exactly \"0\", HTTP 400 (\"Bad Request\") is returned.  When the value is greater than the allowed range [1,250], the maximum allowed value is used instead.  The \"Count\" field in the response will confirm the actual value that was used. (optional)

    try:
        # Halo 5 - Leaderboard - Player CSR
        api_instance.halo5_leaderboard_player_csr(season_id, playlist_id, count=count)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_leaderboard_player_csr: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **season_id** | **str**| The ID for the Season. | 
 **playlist_id** | **str**| The ID for the Playlist. | 
 **count** | **float**| When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 200 is assumed.  When the value contains a non-digit or is exactly \&quot;0\&quot;, HTTP 400 (\&quot;Bad Request\&quot;) is returned.  When the value is greater than the allowed range [1,250], the maximum allowed value is used instead.  The \&quot;Count\&quot; field in the response will confirm the actual value that was used. | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Players in the Leaderboard. An empty list will be returned if no Players are in the Leaderboard. |  -  |
**404** | The Season does not exist, or the Playlist either does not exist or is not part of the given Season. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_match_events**
> halo5_match_events(match_id)

Halo 5 - Match Events

<p>Retrieves a set of Events related to the Match specified. Events are only available once the Match has completed.</p> <p>The set of Events may grow over time as data becomes available.</p> <p>This Endpoint does not have the accuracy guarantees of other Endpoints have, so please use with caution. This endpoint may not return Matches before December 1, 2015.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Events for Match\" to \"Halo 5 - Match Events\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>May 20, 2016:</strong></p>     <ul>         <li>The Endpoint now correctly reports the \"Content-Type\" Response Header as \"application/json\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>May 16, 2016:</strong></p>     <ul>         <li>Documented HTTP 503 Response Code.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Added new types of events to the Endpoint: Impulses, Medals, Player Spawns, Round Stats, Round Ends, Weapon Drops, Weapon Pickups, and Weapon Pickup Pads.</li>         <li>Fixed an issue that caused the API to consistently return HTTP 500's for matches where a player left and rejoined the match.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    match_id = 'match_id_example' # str | An ID that uniquely identifies a Match. Match IDs can be retrieved from the \"Halo 5 - Player Match History\" Endpoint.

    try:
        # Halo 5 - Match Events
        api_instance.halo5_match_events(match_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_match_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match_id** | **str**| An ID that uniquely identifies a Match. Match IDs can be retrieved from the \&quot;Halo 5 - Player Match History\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match Events. |  -  |
**404** | The specified Match could not be found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_match_result_arena**
> halo5_match_result_arena(match_id)

Halo 5 - Match Result - Arena

<p>Retrieves detailed statistics for a Match with the Arena Game Mode.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 12, 2018:</strong></p>     <ul>         <li>Updated the documentation for \"PlayerScore\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Post-Game Carnage Report: Arena\" to \"Halo 5 - Match Result - Arena\".</li>         <li>Removed \"{title}\" Request Parameter.</li>         <li>Updated the documentation for \"GameVariantResourceId\" and \"MapVariantResourceId\" to reference the UGC API.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>May 16, 2016:</strong></p>     <ul>         <li>Documented HTTP 503 Response Code.</li>         <li>Added documentation for the \"MatchSpeedWinAmount\", \"ObjectivesCompletedAmount\", and \"BoostData\" fields.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Added documentation for the \"GameVariantResourceId\", \"MapVariantResourceId\", and \"PlayerScore\" fields.</li>         <li>Updated the documentation for the \"MapVariantId\" and \"GameVariantId\" fields with the recommendation of using the \"MapVariantResourceId\" and \"GameVariantResourceId\" fields, respectively.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    match_id = 'match_id_example' # str | An ID that uniquely identifies a Match. Match IDs can be retrieved from the \"Halo 5 - Player Match History\" Endpoint.

    try:
        # Halo 5 - Match Result - Arena
        api_instance.halo5_match_result_arena(match_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_match_result_arena: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match_id** | **str**| An ID that uniquely identifies a Match. Match IDs can be retrieved from the \&quot;Halo 5 - Player Match History\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match Result. |  -  |
**404** | The specified Match could not be found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_match_result_campaign**
> halo5_match_result_campaign(match_id)

Halo 5 - Match Result - Campaign

<p>Retrieves detailed statistics for a Match with the Campaign Game Mode.</p> <p>Every time a player plays a portion of a Campaign Mission, a Match will be generated whether the player finishes the Mission or not. If the \"Match\" ends because the Mission was completed, this will be indicated in the response.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Post-Game Carnage Report: Campaign\" to \"Halo 5 - Match Result - Campaign\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>May 16, 2016:</strong></p>     <ul>         <li>Documented HTTP 503 Response Code.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Added documentation for the \"GameVariantResourceId\", \"MapVariantResourceId\", and \"PlayerScore\" fields.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    match_id = 'match_id_example' # str | An ID that uniquely identifies a Match. Match IDs can be retrieved from the \"Halo 5 - Player Match History\" Endpoint.

    try:
        # Halo 5 - Match Result - Campaign
        api_instance.halo5_match_result_campaign(match_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_match_result_campaign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match_id** | **str**| An ID that uniquely identifies a Match. Match IDs can be retrieved from the \&quot;Halo 5 - Player Match History\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match Result. |  -  |
**404** | The specified Match could not be found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_match_result_custom**
> halo5_match_result_custom(match_id)

Halo 5 - Match Result - Custom

<p>Retrieves detailed statistics for a Match with the Custom Game Mode. Games with the Custom Game Mode are played on Xbox Live Servers. For games played on Local Servers, use the \"Halo 5 - Match Result - Custom Local\" Endpoint.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 12, 2018:</strong></p>     <ul>         <li>Updated the documentation for \"PlayerScore\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>         <li>Added documentation for \"PresentInMatch\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Post-Game Carnage Report: Custom\" to \"Halo 5 - Match Result - Custom\".</li>         <li>Removed \"{title}\" Request Parameter.</li>         <li>Updated the documentation for \"GameVariantResourceId\" and \"MapVariantResourceId\" to reference the UGC API.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>May 16, 2016:</strong></p>     <ul>         <li>Documented HTTP 503 Response Code.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Added documentation for the \"GameVariantResourceId\", \"MapVariantResourceId\", and \"PlayerScore\" fields.</li>         <li>Updated the documentation for the \"MapVariantId\" and \"GameVariantId\" fields with the recommendation of using the \"MapVariantResourceId\" and \"GameVariantResourceId\" fields, respectively.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    match_id = 'match_id_example' # str | An ID that uniquely identifies a Match. Match IDs can be retrieved from the \"Halo 5 - Player Match History\" Endpoint.

    try:
        # Halo 5 - Match Result - Custom
        api_instance.halo5_match_result_custom(match_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_match_result_custom: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match_id** | **str**| An ID that uniquely identifies a Match. Match IDs can be retrieved from the \&quot;Halo 5 - Player Match History\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match Result. |  -  |
**404** | The specified Match could not be found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_match_result_custom_local**
> halo5_match_result_custom_local(match_id)

Halo 5 - Match Result - Custom Local

<p>Retrieves detailed statistics for a Match with the Custom Local Game Mode. Games with the Custom Local Game Mode are played on Local Servers. For games played on Xbox Live Servers, use the \"Halo 5 - Match Result - Custom\" Endpoint.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 12, 2018:</strong></p>     <ul>         <li>Updated the documentation for \"PlayerScore\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    match_id = 'match_id_example' # str | An ID that uniquely identifies a Match. Match IDs can be retrieved from the \"Halo 5 - Player Match History\" Endpoint.

    try:
        # Halo 5 - Match Result - Custom Local
        api_instance.halo5_match_result_custom_local(match_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_match_result_custom_local: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match_id** | **str**| An ID that uniquely identifies a Match. Match IDs can be retrieved from the \&quot;Halo 5 - Player Match History\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match Result. |  -  |
**404** | The specified Match could not be found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_match_result_warzone**
> halo5_match_result_warzone(match_id)

Halo 5 - Match Result - Warzone

<p>Retrieves detailed statistics for a Match with the Warzone Game Mode.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Post-Game Carnage Report: Warzone\" to \"Halo 5 - Match Result - Warzone\".</li>         <li>Removed \"{title}\" Request Parameter.</li>         <li>Updated the documentation for \"GameVariantResourceId\" and \"MapVariantResourceId\" to reference the UGC API.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>May 16, 2016:</strong></p>     <ul>         <li>Documented HTTP 503 Response Code.</li>         <li>Added documentation for the \"MatchSpeedWinAmount\", \"ObjectivesCompletedAmount\", and \"BoostData\" fields.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Added documentation for the \"GameVariantResourceId\", \"MapVariantResourceId\", and \"PlayerScore\" fields.</li>         <li>Updated the documentation for the \"MapVariantId\" and \"GameVariantId\" fields with the recommendation of using the \"MapVariantResourceId\" and \"GameVariantResourceId\" fields, respectively.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    match_id = 'match_id_example' # str | An ID that uniquely identifies a Match. Match IDs can be retrieved from the \"Halo 5 - Player Match History\" Endpoint.

    try:
        # Halo 5 - Match Result - Warzone
        api_instance.halo5_match_result_warzone(match_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_match_result_warzone: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match_id** | **str**| An ID that uniquely identifies a Match. Match IDs can be retrieved from the \&quot;Halo 5 - Player Match History\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match Result. |  -  |
**404** | The specified Match could not be found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_pc_match_result_custom**
> halo5_pc_match_result_custom(match_id)

Halo 5 PC - Match Result - Custom

<p>Retrieves detailed statistics for a Match with the Custom Game Mode. Games with the Custom Game Mode are played on Xbox Live Servers. For games played on Local Servers, use the \"Halo 5 - Match Result - Custom Local\" Endpoint.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 12, 2018:</strong></p>     <ul>         <li>Updated the documentation for \"PlayerScore\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>         <li>Added documentation for \"PresentInMatch\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Post-Game Carnage Report: Custom\" to \"Halo 5 - Match Result - Custom\".</li>         <li>Removed \"{title}\" Request Parameter.</li>         <li>Updated the documentation for \"GameVariantResourceId\" and \"MapVariantResourceId\" to reference the UGC API.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>May 16, 2016:</strong></p>     <ul>         <li>Documented HTTP 503 Response Code.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Added documentation for the \"GameVariantResourceId\", \"MapVariantResourceId\", and \"PlayerScore\" fields.</li>         <li>Updated the documentation for the \"MapVariantId\" and \"GameVariantId\" fields with the recommendation of using the \"MapVariantResourceId\" and \"GameVariantResourceId\" fields, respectively.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    match_id = 'match_id_example' # str | An ID that uniquely identifies a Match. Match IDs can be retrieved from the \"Halo 5 PC - Player Match History\" Endpoint.

    try:
        # Halo 5 PC - Match Result - Custom
        api_instance.halo5_pc_match_result_custom(match_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_pc_match_result_custom: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match_id** | **str**| An ID that uniquely identifies a Match. Match IDs can be retrieved from the \&quot;Halo 5 PC - Player Match History\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match Result. |  -  |
**404** | The specified Match could not be found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_pc_player_match_history**
> halo5_pc_player_match_history(player, modes=modes, start=start, count=count, include_times=include_times)

Halo 5 PC - Player Match History

<p>Retrieves a list of Matches that the Player has participated in and which have completed processing. If the Player is currently in a match, it is not returned in this API.</p> <p>This endpoint will include games played on Local Servers with the Custom Local Game Mode for games that occurred or after December 22, 2017.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 1, 2019:</strong></p>     <ul>         <li>Enabled support for viewing the time component of the \"MatchCompletedDate\" via the \"{include-times}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added support for the Custom Local Game mode.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Matches for Player\" to \"Halo 5 - Player Match History\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Clarified documentation for the \"MapVariant\" and \"GameVariant\" fields.</li>         <li>Corrected \"OwnerType\" values for the \"MapVariant\" and \"GameVariant\" fields.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Player's Gamertag.
    modes = 'modes_example' # str | Indicates what Game Mode(s) the client is interested in getting Matches for (arena, campaign, custom, or warzone).  When the parameter is omitted or empty, Matches from all modes are returned. When a client would like to receive Matches spanning multiple Modes, separate the Modes with a comma (e.g. \"arena,custom\"). There is no significance to the order the Modes are specified in this parameter.  When an invalid Mode is specified, HTTP 400 (\"Bad Request\") is returned.  When a valid Mode is specified more than once, HTTP 400 (\"Bad Request\") is returned. (optional)
    start = 3.4 # float | When specified, this indicates the starting index (0-based) for which the batch of results will begin at. For example, \"start=0\" indicates that the first qualifying result will be returned, no items are 'skipped'. Passing \"start=10\" indicates that the result will begin with the 11th item, the first 10 will be 'skipped'.  When omitted, zero is assumed.  When the value contains a non-digit, HTTP 400 (\"Bad Request\") is returned. (optional)
    count = 3.4 # float | When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 25 is assumed.  When the value contains a non-digit or is exactly \"0\", HTTP 400 (\"Bad Request\") is returned.  When the value is greater than the allowed range [1,25], the maximum allowed value is used instead. The \"Count\" field in the response will confirm the actual value that was used. (optional)
    include_times = True # bool | When set to \"true\", this indicates that the time component of the \"MatchCompletedDate\" field should be populated.  Otherwise, when set to \"false\" or when omitted, the time component will be set to \"00:00:00\".  When the value contains a non-boolean, HTTP 400 (\"Bad Request\") is returned. (optional)

    try:
        # Halo 5 PC - Player Match History
        api_instance.halo5_pc_player_match_history(player, modes=modes, start=start, count=count, include_times=include_times)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_pc_player_match_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag. | 
 **modes** | **str**| Indicates what Game Mode(s) the client is interested in getting Matches for (arena, campaign, custom, or warzone).  When the parameter is omitted or empty, Matches from all modes are returned. When a client would like to receive Matches spanning multiple Modes, separate the Modes with a comma (e.g. \&quot;arena,custom\&quot;). There is no significance to the order the Modes are specified in this parameter.  When an invalid Mode is specified, HTTP 400 (\&quot;Bad Request\&quot;) is returned.  When a valid Mode is specified more than once, HTTP 400 (\&quot;Bad Request\&quot;) is returned. | [optional] 
 **start** | **float**| When specified, this indicates the starting index (0-based) for which the batch of results will begin at. For example, \&quot;start&#x3D;0\&quot; indicates that the first qualifying result will be returned, no items are &#39;skipped&#39;. Passing \&quot;start&#x3D;10\&quot; indicates that the result will begin with the 11th item, the first 10 will be &#39;skipped&#39;.  When omitted, zero is assumed.  When the value contains a non-digit, HTTP 400 (\&quot;Bad Request\&quot;) is returned. | [optional] 
 **count** | **float**| When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 25 is assumed.  When the value contains a non-digit or is exactly \&quot;0\&quot;, HTTP 400 (\&quot;Bad Request\&quot;) is returned.  When the value is greater than the allowed range [1,25], the maximum allowed value is used instead. The \&quot;Count\&quot; field in the response will confirm the actual value that was used. | [optional] 
 **include_times** | **bool**| When set to \&quot;true\&quot;, this indicates that the time component of the \&quot;MatchCompletedDate\&quot; field should be populated.  Otherwise, when set to \&quot;false\&quot; or when omitted, the time component will be set to \&quot;00:00:00\&quot;.  When the value contains a non-boolean, HTTP 400 (\&quot;Bad Request\&quot;) is returned. | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Player&#39;s recent Matches. An empty list will be returned if the Player has not played any Matches in the specified Game Mode(s). |  -  |
**400** | An unsupported value was provided for a query string parameter. |  -  |
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_pc_player_service_records_custom**
> halo5_pc_player_service_records_custom(players)

Halo 5 PC - Player Service Records - Custom

<p>Retrieves Service Records for the Custom Game Mode for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode. Games with the Custom Game Mode are played on Xbox Live Servers. For games played on Local Servers, use the \"Halo 5 - Player Service Records - Custom Local\" Endpoint.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Service Record: Custom\" to \"Halo 5 - Player Service Records - Custom\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    players = 'players_example' # str | A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.

    try:
        # Halo 5 PC - Player Service Records - Custom
        api_instance.halo5_pc_player_service_records_custom(players)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_pc_player_service_records_custom: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **players** | **str**| A comma-separated list of Gamertags. Up to 32 Gamertags may be specified. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Service Records for the requested player(s). |  -  |
**404** | One or more Gamertags don&#39;t pass validation rules. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_player_commendations**
> halo5_player_commendations(player)

Halo 5 - Player Commendations

<p>Retrieves the commendation state for a Player.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>July 14, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Player's Gamertag.

    try:
        # Halo 5 - Player Commendations
        api_instance.halo5_player_commendations(player)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_commendations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the commendation state for the Player. |  -  |
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_player_match_history**
> halo5_player_match_history(player, modes=modes, start=start, count=count, include_times=include_times)

Halo 5 - Player Match History

<p>Retrieves a list of Matches that the Player has participated in and which have completed processing. If the Player is currently in a match, it is not returned in this API.</p> <p>This endpoint will include games played on Local Servers with the Custom Local Game Mode for games that occurred or after December 22, 2017.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 1, 2019:</strong></p>     <ul>         <li>Enabled support for viewing the time component of the \"MatchCompletedDate\" via the \"{include-times}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added support for the Custom Local Game mode.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Matches for Player\" to \"Halo 5 - Player Match History\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Clarified documentation for the \"MapVariant\" and \"GameVariant\" fields.</li>         <li>Corrected \"OwnerType\" values for the \"MapVariant\" and \"GameVariant\" fields.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Player's Gamertag.
    modes = 'modes_example' # str | Indicates what Game Mode(s) the client is interested in getting Matches for (arena, campaign, custom, customlocal, or warzone).  When the parameter is omitted or empty, Matches from all modes are returned. When a client would like to receive Matches spanning multiple Modes, separate the Modes with a comma (e.g. \"arena,custom\"). There is no significance to the order the Modes are specified in this parameter.  When an invalid Mode is specified, HTTP 400 (\"Bad Request\") is returned.  When a valid Mode is specified more than once, HTTP 400 (\"Bad Request\") is returned. (optional)
    start = 3.4 # float | When specified, this indicates the starting index (0-based) for which the batch of results will begin at. For example, \"start=0\" indicates that the first qualifying result will be returned, no items are 'skipped'. Passing \"start=10\" indicates that the result will begin with the 11th item, the first 10 will be 'skipped'.  When omitted, zero is assumed.  When the value contains a non-digit, HTTP 400 (\"Bad Request\") is returned. (optional)
    count = 3.4 # float | When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 25 is assumed.  When the value contains a non-digit or is exactly \"0\", HTTP 400 (\"Bad Request\") is returned.  When the value is greater than the allowed range [1,25], the maximum allowed value is used instead. The \"Count\" field in the response will confirm the actual value that was used. (optional)
    include_times = True # bool | When set to \"true\", this indicates that the time component of the \"MatchCompletedDate\" field should be populated.  Otherwise, when set to \"false\" or when omitted, the time component will be set to \"00:00:00\".  When the value contains a non-boolean, HTTP 400 (\"Bad Request\") is returned. (optional)

    try:
        # Halo 5 - Player Match History
        api_instance.halo5_player_match_history(player, modes=modes, start=start, count=count, include_times=include_times)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_match_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag. | 
 **modes** | **str**| Indicates what Game Mode(s) the client is interested in getting Matches for (arena, campaign, custom, customlocal, or warzone).  When the parameter is omitted or empty, Matches from all modes are returned. When a client would like to receive Matches spanning multiple Modes, separate the Modes with a comma (e.g. \&quot;arena,custom\&quot;). There is no significance to the order the Modes are specified in this parameter.  When an invalid Mode is specified, HTTP 400 (\&quot;Bad Request\&quot;) is returned.  When a valid Mode is specified more than once, HTTP 400 (\&quot;Bad Request\&quot;) is returned. | [optional] 
 **start** | **float**| When specified, this indicates the starting index (0-based) for which the batch of results will begin at. For example, \&quot;start&#x3D;0\&quot; indicates that the first qualifying result will be returned, no items are &#39;skipped&#39;. Passing \&quot;start&#x3D;10\&quot; indicates that the result will begin with the 11th item, the first 10 will be &#39;skipped&#39;.  When omitted, zero is assumed.  When the value contains a non-digit, HTTP 400 (\&quot;Bad Request\&quot;) is returned. | [optional] 
 **count** | **float**| When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 25 is assumed.  When the value contains a non-digit or is exactly \&quot;0\&quot;, HTTP 400 (\&quot;Bad Request\&quot;) is returned.  When the value is greater than the allowed range [1,25], the maximum allowed value is used instead. The \&quot;Count\&quot; field in the response will confirm the actual value that was used. | [optional] 
 **include_times** | **bool**| When set to \&quot;true\&quot;, this indicates that the time component of the \&quot;MatchCompletedDate\&quot; field should be populated.  Otherwise, when set to \&quot;false\&quot; or when omitted, the time component will be set to \&quot;00:00:00\&quot;.  When the value contains a non-boolean, HTTP 400 (\&quot;Bad Request\&quot;) is returned. | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Player&#39;s recent Matches. An empty list will be returned if the Player has not played any Matches in the specified Game Mode(s). |  -  |
**400** | An unsupported value was provided for a query string parameter. |  -  |
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_player_service_records_arena**
> halo5_player_service_records_arena(players, season_id=season_id)

Halo 5 - Player Service Records - Arena

<p>Retrieves Service Records for the Arena Game Mode for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>June 29, 2018:</strong></p>     <ul>         <li>Added support for Social (Unranked) Playlists.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Service Record: Arena\" to \"Halo 5 - Player Service Records - Arena\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>April 20, 2016:</strong></p>     <ul>         <li>Added documentation for the \"CsrPercentile\" field.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    players = 'players_example' # str | A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.
    season_id = 'season_id_example' # str | When specified, this indicates the Season to request the Arena Playlist Stats for. If this is not specified, the default is the current Season. Seasons are available via the Metadata API. Social (Unranked) Arena Playlist Stats can be retrieved by specifying \"NonSeasonal\". (optional)

    try:
        # Halo 5 - Player Service Records - Arena
        api_instance.halo5_player_service_records_arena(players, season_id=season_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_service_records_arena: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **players** | **str**| A comma-separated list of Gamertags. Up to 32 Gamertags may be specified. | 
 **season_id** | **str**| When specified, this indicates the Season to request the Arena Playlist Stats for. If this is not specified, the default is the current Season. Seasons are available via the Metadata API. Social (Unranked) Arena Playlist Stats can be retrieved by specifying \&quot;NonSeasonal\&quot;. | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Service Records for the requested player(s). |  -  |
**404** | One or more Gamertags don&#39;t pass validation rules. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_player_service_records_campaign**
> halo5_player_service_records_campaign(players)

Halo 5 - Player Service Records - Campaign

<p>Retrieves Service Records for the Campaign Game Mode for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Service Record: Campaign\" to \"Halo 5 - Player Service Records - Campaign\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    players = 'players_example' # str | A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.

    try:
        # Halo 5 - Player Service Records - Campaign
        api_instance.halo5_player_service_records_campaign(players)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_service_records_campaign: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **players** | **str**| A comma-separated list of Gamertags. Up to 32 Gamertags may be specified. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Service Records for the requested player(s). |  -  |
**404** | One or more Gamertags don&#39;t pass validation rules. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_player_service_records_custom**
> halo5_player_service_records_custom(players)

Halo 5 - Player Service Records - Custom

<p>Retrieves Service Records for the Custom Game Mode for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode. Games with the Custom Game Mode are played on Xbox Live Servers. For games played on Local Servers, use the \"Halo 5 - Player Service Records - Custom Local\" Endpoint.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Service Record: Custom\" to \"Halo 5 - Player Service Records - Custom\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    players = 'players_example' # str | A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.

    try:
        # Halo 5 - Player Service Records - Custom
        api_instance.halo5_player_service_records_custom(players)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_service_records_custom: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **players** | **str**| A comma-separated list of Gamertags. Up to 32 Gamertags may be specified. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Service Records for the requested player(s). |  -  |
**404** | One or more Gamertags don&#39;t pass validation rules. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_player_service_records_custom_local**
> halo5_player_service_records_custom_local(players)

Halo 5 - Player Service Records - Custom Local

<p>Retrieves Service Records for the Custom Local Game Mode for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode. Games with the Custom Local Game Mode are played on Local Servers. For games played on Xbox Live Servers, use the \"Halo 5 - Player Service Records - Custom\" Endpoint. A player's Custom Local Service Record summarizes games played on or after December 22, 2017.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    players = 'players_example' # str | A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.

    try:
        # Halo 5 - Player Service Records - Custom Local
        api_instance.halo5_player_service_records_custom_local(players)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_service_records_custom_local: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **players** | **str**| A comma-separated list of Gamertags. Up to 32 Gamertags may be specified. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Service Records for the requested player(s). |  -  |
**404** | One or more Gamertags don&#39;t pass validation rules. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo5_player_service_records_warzone**
> halo5_player_service_records_warzone(players)

Halo 5 - Player Service Records - Warzone

<p>Retrieves Service Records for the Warzone Game Mode for one or more players. A Service Record contains a player's lifetime statistics in the Game Mode.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>December 22, 2017:</strong></p>     <ul>         <li>Added Game Mode clarifications to the Endpoint description.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Renamed Endpoint from \"Service Record: Warzone\" to \"Halo 5 - Player Service Records - Warzone\".</li>         <li>Removed \"{title}\" Request Parameter.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    players = 'players_example' # str | A comma-separated list of Gamertags. Up to 32 Gamertags may be specified.

    try:
        # Halo 5 - Player Service Records - Warzone
        api_instance.halo5_player_service_records_warzone(players)
    except Exception as e:
        print("Exception when calling DefaultApi->halo5_player_service_records_warzone: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **players** | **str**| A comma-separated list of Gamertags. Up to 32 Gamertags may be specified. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Service Records for the requested player(s). |  -  |
**404** | One or more Gamertags don&#39;t pass validation rules. |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo_wars2_leaderboard_player_csr**
> halo_wars2_leaderboard_player_csr(season_id, playlist_id, count=count)

Halo Wars 2 - Leaderboard - Player CSR

<p>Retrieves the Leaderboard for Player CSRs. The Leaderboard consists of the top Players with a CSR of 1800 or above for a given Playlist in a Season.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>March 6, 2018:</strong></p>     <ul>         <li>Fixed documentation typos for the names of the \"Player\" and \"Gamertag\" properties.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>July 31, 2017:</strong></p>     <ul>         <li>Clarified documentation for which players are included in the leaderboard.</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>July 14, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    season_id = 'season_id_example' # str | The ID for the Season.
    playlist_id = 'playlist_id_example' # str | The ID for the Playlist.
    count = 3.4 # float | When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 200 is assumed.  When the value contains a non-digit or is exactly \"0\", HTTP 400 (\"Bad Request\") is returned.  When the value is greater than the allowed range [1,250], the maximum allowed value is used instead.  The \"Count\" field in the response will confirm the actual value that was used. (optional)

    try:
        # Halo Wars 2 - Leaderboard - Player CSR
        api_instance.halo_wars2_leaderboard_player_csr(season_id, playlist_id, count=count)
    except Exception as e:
        print("Exception when calling DefaultApi->halo_wars2_leaderboard_player_csr: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **season_id** | **str**| The ID for the Season. | 
 **playlist_id** | **str**| The ID for the Playlist. | 
 **count** | **float**| When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 200 is assumed.  When the value contains a non-digit or is exactly \&quot;0\&quot;, HTTP 400 (\&quot;Bad Request\&quot;) is returned.  When the value is greater than the allowed range [1,250], the maximum allowed value is used instead.  The \&quot;Count\&quot; field in the response will confirm the actual value that was used. | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Players in the Leaderboard. An empty list will be returned if no Players are in the Leaderboard. |  -  |
**404** | The Season does not exist, or the Playlist either does not exist or is not part of the given Season. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo_wars2_match_events**
> halo_wars2_match_events(match_id)

Halo Wars 2 - Match Events

<p>Retrieves a set of Events related to the Match specified. Events are only available once the Match has completed. Events are not available for Matches played with the Custom Match Type.</p> <p>The set of Events may grow over time as data becomes available.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>September 5, 2017:</strong></p>     <ul>         <li>Documented new game mode \"Terminus Firefight\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    match_id = 'match_id_example' # str | An ID that uniquely identifies a Match. Match IDs can be retrieved from the \"Halo Wars 2 - Player Match History\" Endpoint.

    try:
        # Halo Wars 2 - Match Events
        api_instance.halo_wars2_match_events(match_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo_wars2_match_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match_id** | **str**| An ID that uniquely identifies a Match. Match IDs can be retrieved from the \&quot;Halo Wars 2 - Player Match History\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match Events. |  -  |
**404** | The specified Match could not be found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo_wars2_match_result**
> halo_wars2_match_result(match_id)

Halo Wars 2 - Match Result

<p>Retrieves detailed statistics for a Match. Matches can be retrieved before they are completed; however, the data for in-progress Matches is only updated every few minutes.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>September 5, 2017:</strong></p>     <ul>         <li>Documented new game mode \"Terminus Firefight\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    match_id = 'match_id_example' # str | An ID that uniquely identifies a Match. Match IDs can be retrieved from the \"Halo Wars 2 - Player Match History\" Endpoint.

    try:
        # Halo Wars 2 - Match Result
        api_instance.halo_wars2_match_result(match_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo_wars2_match_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match_id** | **str**| An ID that uniquely identifies a Match. Match IDs can be retrieved from the \&quot;Halo Wars 2 - Player Match History\&quot; Endpoint. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match Result. |  -  |
**404** | The specified Match could not be found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo_wars2_player_campaign_progress**
> halo_wars2_player_campaign_progress(player)

Halo Wars 2 - Player Campaign Progress

<p>Retrieves the Campaign Progress state for a Player.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Player's Gamertag.

    try:
        # Halo Wars 2 - Player Campaign Progress
        api_instance.halo_wars2_player_campaign_progress(player)
    except Exception as e:
        print("Exception when calling DefaultApi->halo_wars2_player_campaign_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Campaign Progress for the Player. |  -  |
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo_wars2_player_match_history**
> halo_wars2_player_match_history(player, match_type=match_type, start=start, count=count)

Halo Wars 2 - Player Match History

<p>Retrieves a list of Matches that the Player has participated in. If the Player is currently in a Match, it is not returned in this API.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>September 5, 2017:</strong></p>     <ul>         <li>Documented new game mode \"Terminus Firefight\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Player's Gamertag.
    match_type = 'match_type_example' # str | Indicates what Match Type the client is interested in getting Matches for (\"custom\" or \"matchmaking\").  When the parameter is omitted or empty, Matches from all Match Types are returned.  When an invalid Mode is specified, HTTP 400 (\"Bad Request\") is returned. (optional)
    start = 3.4 # float | When specified, this indicates the starting index (0-based) for which the batch of results will begin at. For example, \"start=0\" indicates that the first qualifying result will be returned, no items are 'skipped'. Passing \"start=10\" indicates that the result will begin with the 11th item, the first 10 will be 'skipped'.  When omitted, zero is assumed.  When the value contains a non-digit, HTTP 400 (\"Bad Request\") is returned. (optional)
    count = 3.4 # float | When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 25 is assumed.  When the value contains a non-digit or is exactly \"0\", HTTP 400 (\"Bad Request\") is returned.  When the value is greater than the allowed range [1,25], the maximum allowed value is used instead. The \"Count\" field in the response will confirm the actual value that was used. (optional)

    try:
        # Halo Wars 2 - Player Match History
        api_instance.halo_wars2_player_match_history(player, match_type=match_type, start=start, count=count)
    except Exception as e:
        print("Exception when calling DefaultApi->halo_wars2_player_match_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag. | 
 **match_type** | **str**| Indicates what Match Type the client is interested in getting Matches for (\&quot;custom\&quot; or \&quot;matchmaking\&quot;).  When the parameter is omitted or empty, Matches from all Match Types are returned.  When an invalid Mode is specified, HTTP 400 (\&quot;Bad Request\&quot;) is returned. | [optional] 
 **start** | **float**| When specified, this indicates the starting index (0-based) for which the batch of results will begin at. For example, \&quot;start&#x3D;0\&quot; indicates that the first qualifying result will be returned, no items are &#39;skipped&#39;. Passing \&quot;start&#x3D;10\&quot; indicates that the result will begin with the 11th item, the first 10 will be &#39;skipped&#39;.  When omitted, zero is assumed.  When the value contains a non-digit, HTTP 400 (\&quot;Bad Request\&quot;) is returned. | [optional] 
 **count** | **float**| When specified, this indicates the maximum quantity of items the client would like returned in the response.  When omitted, 25 is assumed.  When the value contains a non-digit or is exactly \&quot;0\&quot;, HTTP 400 (\&quot;Bad Request\&quot;) is returned.  When the value is greater than the allowed range [1,25], the maximum allowed value is used instead. The \&quot;Count\&quot; field in the response will confirm the actual value that was used. | [optional] 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Match History for the Player. |  -  |
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo_wars2_player_playlist_ratings**
> halo_wars2_player_playlist_ratings(playlist_id, players)

Halo Wars 2 - Player Playlist Ratings

<p>Retrieves Playlist Ratings in the current season for one or more Players.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    playlist_id = 'playlist_id_example' # str | The ID of the Playlist to get Ratings for.
    players = 'players_example' # str | A comma-separated list of Gamertags. Up to 6 Gamertags may be specified.

    try:
        # Halo Wars 2 - Player Playlist Ratings
        api_instance.halo_wars2_player_playlist_ratings(playlist_id, players)
    except Exception as e:
        print("Exception when calling DefaultApi->halo_wars2_player_playlist_ratings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlist_id** | **str**| The ID of the Playlist to get Ratings for. | 
 **players** | **str**| A comma-separated list of Gamertags. Up to 6 Gamertags may be specified. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Playlist Ratings for the Player(s). |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo_wars2_player_season_stats_summary**
> halo_wars2_player_season_stats_summary(player, season_id)

Halo Wars 2 - Player Season Stats Summary

<p>Retrieves high-level aggregations across a Season for a Player.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>September 5, 2017:</strong></p>     <ul>         <li>Added additional pivots of data: \"CustomModeStats\", \"SinglePlayerModeStats\", \"MultiplayerModeStats\", \"SocialModeStats\", and \"RankedModeStats\".</li>         <li>Added additional fields to the \"Summary\" contract: \"GameMode\" and \"HighestObjectiveScoreByTeamSize\".</li>         <li>Documented new game mode \"Terminus Firefight\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Player's Gamertag.
    season_id = 'season_id_example' # str | A Season ID or \"current\" for the current Season. Seasons are available via the Metadata API.

    try:
        # Halo Wars 2 - Player Season Stats Summary
        api_instance.halo_wars2_player_season_stats_summary(player, season_id)
    except Exception as e:
        print("Exception when calling DefaultApi->halo_wars2_player_season_stats_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag. | 
 **season_id** | **str**| A Season ID or \&quot;current\&quot; for the current Season. Seasons are available via the Metadata API. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Stats Summary for the Player. |  -  |
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo_wars2_player_stats_summary**
> halo_wars2_player_stats_summary(player)

Halo Wars 2 - Player Stats Summary

<p>Retrieves high-level aggregations across the lifetime of a Player.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>September 5, 2017:</strong></p>     <ul>         <li>Added additional fields: \"GameMode\" and \"HighestObjectiveScoreByTeamSize\".</li>         <li>Documented new game mode \"Terminus Firefight\".</li>     </ul> </div> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    player = 'player_example' # str | The Player's Gamertag.

    try:
        # Halo Wars 2 - Player Stats Summary
        api_instance.halo_wars2_player_stats_summary(player)
    except Exception as e:
        print("Exception when calling DefaultApi->halo_wars2_player_stats_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **str**| The Player&#39;s Gamertag. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the Stats Summary for the Player. |  -  |
**404** | Specified Player was not found. |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **halo_wars2_player_xps**
> halo_wars2_player_xps(players)

Halo Wars 2 - Player XPs

<p>Retrieves XP and Rank information for one or more players.</p> <br /> <h4>Changelog</h4> <div class=\"panel-body\">     <p><strong>February 21, 2017:</strong></p>     <ul>         <li>Added Endpoint.</li>     </ul> </div> 

### Example

* Api Key Authentication (apiKeyQuery):
* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.haloapi.com/stats
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.haloapi.com/stats"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyQuery
configuration.api_key['apiKeyQuery'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyQuery'] = 'Bearer'

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    players = 'players_example' # str | A comma-separated list of Gamertags. Up to 6 Gamertags may be specified.

    try:
        # Halo Wars 2 - Player XPs
        api_instance.halo_wars2_player_xps(players)
    except Exception as e:
        print("Exception when calling DefaultApi->halo_wars2_player_xps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **players** | **str**| A comma-separated list of Gamertags. Up to 6 Gamertags may be specified. | 

### Return type

void (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body will contain the XPs for the Player(s). |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

