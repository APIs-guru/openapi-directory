# TenancyContactsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Contact]**](Contact.md) |  | 

## Example

```python
from openapi_client.models.tenancy_contacts_list200_response import TenancyContactsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TenancyContactsList200Response from a JSON string
tenancy_contacts_list200_response_instance = TenancyContactsList200Response.from_json(json)
# print the JSON string representation of the object
print(TenancyContactsList200Response.to_json())

# convert the object into a dict
tenancy_contacts_list200_response_dict = tenancy_contacts_list200_response_instance.to_dict()
# create an instance of TenancyContactsList200Response from a dict
tenancy_contacts_list200_response_from_dict = TenancyContactsList200Response.from_dict(tenancy_contacts_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


