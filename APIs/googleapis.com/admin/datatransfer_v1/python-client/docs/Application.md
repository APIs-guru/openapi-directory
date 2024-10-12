# Application

Application resources represent applications installed on the domain that support transferring ownership of user data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of the resource. | [optional] 
**id** | **str** | The application&#39;s ID. Retrievable by using the [&#x60;applications.list()&#x60;](/admin-sdk/data-transfer/reference/rest/v1/applications/list) method. | [optional] 
**kind** | **str** | Identifies the resource as a DataTransfer Application Resource. | [optional] [default to 'admin#datatransfer#ApplicationResource']
**name** | **str** | The application&#39;s name. | [optional] 
**transfer_params** | [**List[ApplicationTransferParam]**](ApplicationTransferParam.md) | The list of all possible transfer parameters for this application. These parameters select which categories of the user&#39;s data to transfer. | [optional] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


