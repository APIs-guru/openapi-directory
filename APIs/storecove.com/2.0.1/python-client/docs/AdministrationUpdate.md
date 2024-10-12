# AdministrationUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address to send the received document to | [optional] 
**package_version** | **str** | The version of the package. | [optional] 
**packaging** | **str** | How to package the purchase invoice. | [optional] 
**sender_email_identity_id** | **int** | The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used | [optional] 

## Example

```python
from openapi_client.models.administration_update import AdministrationUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of AdministrationUpdate from a JSON string
administration_update_instance = AdministrationUpdate.from_json(json)
# print the JSON string representation of the object
print(AdministrationUpdate.to_json())

# convert the object into a dict
administration_update_dict = administration_update_instance.to_dict()
# create an instance of AdministrationUpdate from a dict
administration_update_from_dict = AdministrationUpdate.from_dict(administration_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


