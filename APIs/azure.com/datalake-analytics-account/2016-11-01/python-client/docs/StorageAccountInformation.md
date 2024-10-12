# StorageAccountInformation

Azure Storage account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageAccountInformationProperties**](StorageAccountInformationProperties.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_information import StorageAccountInformation

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountInformation from a JSON string
storage_account_information_instance = StorageAccountInformation.from_json(json)
# print the JSON string representation of the object
print(StorageAccountInformation.to_json())

# convert the object into a dict
storage_account_information_dict = storage_account_information_instance.to_dict()
# create an instance of StorageAccountInformation from a dict
storage_account_information_from_dict = StorageAccountInformation.from_dict(storage_account_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


