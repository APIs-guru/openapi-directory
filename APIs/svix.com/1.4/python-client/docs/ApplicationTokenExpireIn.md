# ApplicationTokenExpireIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry** | **int** | How many seconds until the old key is expired. | [optional] 

## Example

```python
from openapi_client.models.application_token_expire_in import ApplicationTokenExpireIn

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTokenExpireIn from a JSON string
application_token_expire_in_instance = ApplicationTokenExpireIn.from_json(json)
# print the JSON string representation of the object
print(ApplicationTokenExpireIn.to_json())

# convert the object into a dict
application_token_expire_in_dict = application_token_expire_in_instance.to_dict()
# create an instance of ApplicationTokenExpireIn from a dict
application_token_expire_in_from_dict = ApplicationTokenExpireIn.from_dict(application_token_expire_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


