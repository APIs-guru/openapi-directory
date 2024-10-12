# HTTPConfiguration

HTTP configuration of the connectivity check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**List[HTTPHeader]**](HTTPHeader.md) | List of HTTP headers. | [optional] 
**method** | **str** | HTTP method. | [optional] 
**valid_status_codes** | **List[int]** | Valid status codes. | [optional] 

## Example

```python
from openapi_client.models.http_configuration import HTTPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of HTTPConfiguration from a JSON string
http_configuration_instance = HTTPConfiguration.from_json(json)
# print the JSON string representation of the object
print(HTTPConfiguration.to_json())

# convert the object into a dict
http_configuration_dict = http_configuration_instance.to_dict()
# create an instance of HTTPConfiguration from a dict
http_configuration_from_dict = HTTPConfiguration.from_dict(http_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


