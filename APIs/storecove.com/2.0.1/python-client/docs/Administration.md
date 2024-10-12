# Administration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address to send the received document to | [optional] 
**id** | **int** | The Storecove assigned id for the Administration. | [optional] 
**legal_entity_id** | **int** | The LegalEntity the Administration belongs to. | [optional] 
**package_version** | **str** | The version of the package. | [optional] 
**packaging** | **str** | How to package the purchase invoice. | [optional] 
**sender_email_identity_id** | **int** | The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used | [optional] 

## Example

```python
from openapi_client.models.administration import Administration

# TODO update the JSON string below
json = "{}"
# create an instance of Administration from a JSON string
administration_instance = Administration.from_json(json)
# print the JSON string representation of the object
print(Administration.to_json())

# convert the object into a dict
administration_dict = administration_instance.to_dict()
# create an instance of Administration from a dict
administration_from_dict = Administration.from_dict(administration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


