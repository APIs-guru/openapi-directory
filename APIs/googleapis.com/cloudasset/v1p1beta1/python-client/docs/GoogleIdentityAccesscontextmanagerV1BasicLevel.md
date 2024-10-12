# GoogleIdentityAccesscontextmanagerV1BasicLevel

`BasicLevel` is an `AccessLevel` using a set of recommended features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combining_function** | **str** | How the &#x60;conditions&#x60; list should be combined to determine if a request is granted this &#x60;AccessLevel&#x60;. If AND is used, each &#x60;Condition&#x60; in &#x60;conditions&#x60; must be satisfied for the &#x60;AccessLevel&#x60; to be applied. If OR is used, at least one &#x60;Condition&#x60; in &#x60;conditions&#x60; must be satisfied for the &#x60;AccessLevel&#x60; to be applied. Default behavior is AND. | [optional] 
**conditions** | [**List[GoogleIdentityAccesscontextmanagerV1Condition]**](GoogleIdentityAccesscontextmanagerV1Condition.md) | Required. A list of requirements for the &#x60;AccessLevel&#x60; to be granted. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_basic_level import GoogleIdentityAccesscontextmanagerV1BasicLevel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1BasicLevel from a JSON string
google_identity_accesscontextmanager_v1_basic_level_instance = GoogleIdentityAccesscontextmanagerV1BasicLevel.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1BasicLevel.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_basic_level_dict = google_identity_accesscontextmanager_v1_basic_level_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1BasicLevel from a dict
google_identity_accesscontextmanager_v1_basic_level_from_dict = GoogleIdentityAccesscontextmanagerV1BasicLevel.from_dict(google_identity_accesscontextmanager_v1_basic_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


