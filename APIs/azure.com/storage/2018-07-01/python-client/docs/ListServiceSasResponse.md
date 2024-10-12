# ListServiceSasResponse

The List service SAS credentials operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_sas_token** | **str** | List service SAS credentials of specific resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_service_sas_response import ListServiceSasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceSasResponse from a JSON string
list_service_sas_response_instance = ListServiceSasResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceSasResponse.to_json())

# convert the object into a dict
list_service_sas_response_dict = list_service_sas_response_instance.to_dict()
# create an instance of ListServiceSasResponse from a dict
list_service_sas_response_from_dict = ListServiceSasResponse.from_dict(list_service_sas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


