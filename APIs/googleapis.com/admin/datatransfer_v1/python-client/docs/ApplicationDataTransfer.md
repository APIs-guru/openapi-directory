# ApplicationDataTransfer

Template to map fields of ApplicationDataTransfer resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The application&#39;s ID. | [optional] 
**application_transfer_params** | [**List[ApplicationTransferParam]**](ApplicationTransferParam.md) | The transfer parameters for the application. These parameters are used to select the data which will get transferred in context of this application. For more information about the specific values available for each application, see the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference. | [optional] 
**application_transfer_status** | **str** | Read-only. Current status of transfer for this application. | [optional] 

## Example

```python
from openapi_client.models.application_data_transfer import ApplicationDataTransfer

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDataTransfer from a JSON string
application_data_transfer_instance = ApplicationDataTransfer.from_json(json)
# print the JSON string representation of the object
print(ApplicationDataTransfer.to_json())

# convert the object into a dict
application_data_transfer_dict = application_data_transfer_instance.to_dict()
# create an instance of ApplicationDataTransfer from a dict
application_data_transfer_from_dict = ApplicationDataTransfer.from_dict(application_data_transfer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


