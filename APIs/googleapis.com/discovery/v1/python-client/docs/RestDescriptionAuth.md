# RestDescriptionAuth

Authentication information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oauth2** | [**RestDescriptionAuthOauth2**](RestDescriptionAuthOauth2.md) |  | [optional] 

## Example

```python
from openapi_client.models.rest_description_auth import RestDescriptionAuth

# TODO update the JSON string below
json = "{}"
# create an instance of RestDescriptionAuth from a JSON string
rest_description_auth_instance = RestDescriptionAuth.from_json(json)
# print the JSON string representation of the object
print(RestDescriptionAuth.to_json())

# convert the object into a dict
rest_description_auth_dict = rest_description_auth_instance.to_dict()
# create an instance of RestDescriptionAuth from a dict
rest_description_auth_from_dict = RestDescriptionAuth.from_dict(rest_description_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


