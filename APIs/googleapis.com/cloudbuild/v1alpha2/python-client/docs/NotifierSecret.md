# NotifierSecret

NotifierSecret is the container that maps a secret name (reference) to its Google Cloud Secret Manager resource path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name is the local name of the secret, such as the verbatim string \&quot;my-smtp-password\&quot;. | [optional] 
**value** | **str** | Value is interpreted to be a resource path for fetching the actual (versioned) secret data for this secret. For example, this would be a Google Cloud Secret Manager secret version resource path like: \&quot;projects/my-project/secrets/my-secret/versions/latest\&quot;. | [optional] 

## Example

```python
from openapi_client.models.notifier_secret import NotifierSecret

# TODO update the JSON string below
json = "{}"
# create an instance of NotifierSecret from a JSON string
notifier_secret_instance = NotifierSecret.from_json(json)
# print the JSON string representation of the object
print(NotifierSecret.to_json())

# convert the object into a dict
notifier_secret_dict = notifier_secret_instance.to_dict()
# create an instance of NotifierSecret from a dict
notifier_secret_from_dict = NotifierSecret.from_dict(notifier_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


