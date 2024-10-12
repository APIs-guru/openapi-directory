# HttpRouteCorsPolicy

The Specification for allowing client side cross-origin requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_credentials** | **bool** | In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This translates to the Access-Control-Allow-Credentials header. Default value is false. | [optional] 
**allow_headers** | **List[str]** | Specifies the content for Access-Control-Allow-Headers header. | [optional] 
**allow_methods** | **List[str]** | Specifies the content for Access-Control-Allow-Methods header. | [optional] 
**allow_origin_regexes** | **List[str]** | Specifies the regular expression patterns that match allowed origins. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax. | [optional] 
**allow_origins** | **List[str]** | Specifies the list of origins that will be allowed to do CORS requests. An origin is allowed if it matches either an item in allow_origins or an item in allow_origin_regexes. | [optional] 
**disabled** | **bool** | If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect. | [optional] 
**expose_headers** | **List[str]** | Specifies the content for Access-Control-Expose-Headers header. | [optional] 
**max_age** | **str** | Specifies how long result of a preflight request can be cached in seconds. This translates to the Access-Control-Max-Age header. | [optional] 

## Example

```python
from openapi_client.models.http_route_cors_policy import HttpRouteCorsPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteCorsPolicy from a JSON string
http_route_cors_policy_instance = HttpRouteCorsPolicy.from_json(json)
# print the JSON string representation of the object
print(HttpRouteCorsPolicy.to_json())

# convert the object into a dict
http_route_cors_policy_dict = http_route_cors_policy_instance.to_dict()
# create an instance of HttpRouteCorsPolicy from a dict
http_route_cors_policy_from_dict = HttpRouteCorsPolicy.from_dict(http_route_cors_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


