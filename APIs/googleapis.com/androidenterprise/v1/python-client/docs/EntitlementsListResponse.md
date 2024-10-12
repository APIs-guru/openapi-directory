# EntitlementsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement** | [**List[Entitlement]**](Entitlement.md) | An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to. | [optional] 

## Example

```python
from openapi_client.models.entitlements_list_response import EntitlementsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EntitlementsListResponse from a JSON string
entitlements_list_response_instance = EntitlementsListResponse.from_json(json)
# print the JSON string representation of the object
print(EntitlementsListResponse.to_json())

# convert the object into a dict
entitlements_list_response_dict = entitlements_list_response_instance.to_dict()
# create an instance of EntitlementsListResponse from a dict
entitlements_list_response_from_dict = EntitlementsListResponse.from_dict(entitlements_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


