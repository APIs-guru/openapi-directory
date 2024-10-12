# JwtLocation

Specifies a location to extract JWT from an API request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cookie** | **str** | Specifies cookie name to extract JWT token. | [optional] 
**header** | **str** | Specifies HTTP header name to extract JWT token. | [optional] 
**query** | **str** | Specifies URL query parameter name to extract JWT token. | [optional] 
**value_prefix** | **str** | The value prefix. The value format is \&quot;value_prefix{token}\&quot; Only applies to \&quot;in\&quot; header type. Must be empty for \&quot;in\&quot; query type. If not empty, the header value has to match (case sensitive) this prefix. If not matched, JWT will not be extracted. If matched, JWT will be extracted after the prefix is removed. For example, for \&quot;Authorization: Bearer {JWT}\&quot;, value_prefix&#x3D;\&quot;Bearer \&quot; with a space at the end. | [optional] 

## Example

```python
from openapi_client.models.jwt_location import JwtLocation

# TODO update the JSON string below
json = "{}"
# create an instance of JwtLocation from a JSON string
jwt_location_instance = JwtLocation.from_json(json)
# print the JSON string representation of the object
print(JwtLocation.to_json())

# convert the object into a dict
jwt_location_dict = jwt_location_instance.to_dict()
# create an instance of JwtLocation from a dict
jwt_location_from_dict = JwtLocation.from_dict(jwt_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


