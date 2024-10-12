# InitiateTransferProperties

Request parameters to initiate transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profile_id** | **str** | Target Usage context for devTest subscriptions. | [optional] 
**recipient_email_id** | **str** | Email Id of recipient for transfer. | [optional] 

## Example

```python
from openapi_client.models.initiate_transfer_properties import InitiateTransferProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateTransferProperties from a JSON string
initiate_transfer_properties_instance = InitiateTransferProperties.from_json(json)
# print the JSON string representation of the object
print(InitiateTransferProperties.to_json())

# convert the object into a dict
initiate_transfer_properties_dict = initiate_transfer_properties_instance.to_dict()
# create an instance of InitiateTransferProperties from a dict
initiate_transfer_properties_from_dict = InitiateTransferProperties.from_dict(initiate_transfer_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


