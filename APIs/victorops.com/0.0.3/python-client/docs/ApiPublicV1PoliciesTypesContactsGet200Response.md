# ApiPublicV1PoliciesTypesContactsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_url** | **str** |  | [optional] 
**contact_types** | [**List[ContactObject]**](ContactObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_public_v1_policies_types_contacts_get200_response import ApiPublicV1PoliciesTypesContactsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiPublicV1PoliciesTypesContactsGet200Response from a JSON string
api_public_v1_policies_types_contacts_get200_response_instance = ApiPublicV1PoliciesTypesContactsGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiPublicV1PoliciesTypesContactsGet200Response.to_json())

# convert the object into a dict
api_public_v1_policies_types_contacts_get200_response_dict = api_public_v1_policies_types_contacts_get200_response_instance.to_dict()
# create an instance of ApiPublicV1PoliciesTypesContactsGet200Response from a dict
api_public_v1_policies_types_contacts_get200_response_from_dict = ApiPublicV1PoliciesTypesContactsGet200Response.from_dict(api_public_v1_policies_types_contacts_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


