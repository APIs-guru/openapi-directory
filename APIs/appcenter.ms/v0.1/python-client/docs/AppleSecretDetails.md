# AppleSecretDetails

Apple secret details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_code** | **str** | 6 digit auth code | [optional] 
**password** | **str** | password to connect to apple store. | [optional] 
**username** | **str** | username to connect to apple store. | [optional] 

## Example

```python
from openapi_client.models.apple_secret_details import AppleSecretDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AppleSecretDetails from a JSON string
apple_secret_details_instance = AppleSecretDetails.from_json(json)
# print the JSON string representation of the object
print(AppleSecretDetails.to_json())

# convert the object into a dict
apple_secret_details_dict = apple_secret_details_instance.to_dict()
# create an instance of AppleSecretDetails from a dict
apple_secret_details_from_dict = AppleSecretDetails.from_dict(apple_secret_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


