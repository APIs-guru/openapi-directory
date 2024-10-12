# ListContainerSasInput

The parameters to the list SAS request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_time** | **datetime** | The SAS URL expiration time.  This must be less than 24 hours from the current time. | [optional] 
**permissions** | **str** | The permissions to set on the SAS URL. | [optional] 

## Example

```python
from openapi_client.models.list_container_sas_input import ListContainerSasInput

# TODO update the JSON string below
json = "{}"
# create an instance of ListContainerSasInput from a JSON string
list_container_sas_input_instance = ListContainerSasInput.from_json(json)
# print the JSON string representation of the object
print(ListContainerSasInput.to_json())

# convert the object into a dict
list_container_sas_input_dict = list_container_sas_input_instance.to_dict()
# create an instance of ListContainerSasInput from a dict
list_container_sas_input_from_dict = ListContainerSasInput.from_dict(list_container_sas_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


