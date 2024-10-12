# HttpAuthentication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Gets or sets the http authentication type. | [optional] 

## Example

```python
from openapi_client.models.http_authentication import HttpAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of HttpAuthentication from a JSON string
http_authentication_instance = HttpAuthentication.from_json(json)
# print the JSON string representation of the object
print(HttpAuthentication.to_json())

# convert the object into a dict
http_authentication_dict = http_authentication_instance.to_dict()
# create an instance of HttpAuthentication from a dict
http_authentication_from_dict = HttpAuthentication.from_dict(http_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


