# AdministratorDetails

Details of the organization administrator of the certificate issuer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. | [optional] 
**first_name** | **str** | First name. | [optional] 
**last_name** | **str** | Last name. | [optional] 
**phone** | **str** | Phone number. | [optional] 

## Example

```python
from openapi_client.models.administrator_details import AdministratorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AdministratorDetails from a JSON string
administrator_details_instance = AdministratorDetails.from_json(json)
# print the JSON string representation of the object
print(AdministratorDetails.to_json())

# convert the object into a dict
administrator_details_dict = administrator_details_instance.to_dict()
# create an instance of AdministratorDetails from a dict
administrator_details_from_dict = AdministratorDetails.from_dict(administrator_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


