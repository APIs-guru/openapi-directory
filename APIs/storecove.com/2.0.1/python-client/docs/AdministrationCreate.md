# AdministrationCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address to send the received document to | [optional] 
**legal_entity_id** | **int** | The LegalEntity the Administration belongs to. | [optional] 
**package_version** | **str** | The version of the package. | [optional] [default to 'peppol_bis_v3']
**packaging** | **str** | How to package the purchase invoice. | [optional] [default to 'ubl']
**sender_email_identity_id** | **int** | The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used | [optional] 

## Example

```python
from openapi_client.models.administration_create import AdministrationCreate

# TODO update the JSON string below
json = "{}"
# create an instance of AdministrationCreate from a JSON string
administration_create_instance = AdministrationCreate.from_json(json)
# print the JSON string representation of the object
print(AdministrationCreate.to_json())

# convert the object into a dict
administration_create_dict = administration_create_instance.to_dict()
# create an instance of AdministrationCreate from a dict
administration_create_from_dict = AdministrationCreate.from_dict(administration_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


