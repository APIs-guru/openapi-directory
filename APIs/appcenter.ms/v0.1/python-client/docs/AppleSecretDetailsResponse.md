# AppleSecretDetailsResponse

Apple secret details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | username to connect to apple store | 

## Example

```python
from openapi_client.models.apple_secret_details_response import AppleSecretDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppleSecretDetailsResponse from a JSON string
apple_secret_details_response_instance = AppleSecretDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(AppleSecretDetailsResponse.to_json())

# convert the object into a dict
apple_secret_details_response_dict = apple_secret_details_response_instance.to_dict()
# create an instance of AppleSecretDetailsResponse from a dict
apple_secret_details_response_from_dict = AppleSecretDetailsResponse.from_dict(apple_secret_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


