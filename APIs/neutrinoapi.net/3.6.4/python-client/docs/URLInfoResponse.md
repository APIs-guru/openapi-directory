# URLInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The actual content this URL responded with. Only set if the &#39;fetch-content&#39; option was used | 
**content_encoding** | **str** | The encoding format the URL uses | 
**content_size** | **int** | The size of the URL content in bytes | 
**content_type** | **str** | The content-type this URL serves | 
**http_ok** | **bool** | True if this URL responded with an HTTP OK (200) status | 
**http_redirect** | **bool** | True if this URL responded with an HTTP redirect | 
**http_status** | **int** | The HTTP status code this URL responded with. An HTTP status of 0 indicates a network level issue | 
**http_status_message** | **int** | The HTTP status message assoicated with the status code | 
**is_error** | **bool** | True if an error occurred while loading the URL. This includes network errors, TLS errors and timeouts | 
**is_timeout** | **bool** | True if a timeout occurred while loading the URL. You can set the timeout with the request parameter &#39;timeout&#39; | 
**language_code** | **str** | The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers | 
**load_time** | **float** | The time taken to load the URL content in seconds | 
**query** | **Dict[str, str]** | A key-value map of the URL query paramaters | 
**real** | **bool** | Is this URL actually serving real content | 
**server_city** | **str** | The servers IP geo-location: full city name (if detectable) | 
**server_country** | **str** | The servers IP geo-location: full country name | 
**server_country_code** | **str** | The servers IP geo-location: ISO 2-letter country code | 
**server_hostname** | **str** | The servers hostname (PTR record) | 
**server_ip** | **str** | The IP address of the server hosting this URL | 
**server_name** | **str** | The name of the server software hosting this URL | 
**server_region** | **str** | The servers IP geo-location: full region name (if detectable) | 
**title** | **str** | The document title | 
**url** | **str** | The fully qualified URL. This may be different to the URL requested if http-redirect is true | 
**url_path** | **str** | The URL path | 
**url_port** | **int** | The URL port | 
**url_protocol** | **str** | The URL protocol, usually http or https | 
**valid** | **bool** | Is this a valid well-formed URL | 

## Example

```python
from openapi_client.models.url_info_response import URLInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of URLInfoResponse from a JSON string
url_info_response_instance = URLInfoResponse.from_json(json)
# print the JSON string representation of the object
print(URLInfoResponse.to_json())

# convert the object into a dict
url_info_response_dict = url_info_response_instance.to_dict()
# create an instance of URLInfoResponse from a dict
url_info_response_from_dict = URLInfoResponse.from_dict(url_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


