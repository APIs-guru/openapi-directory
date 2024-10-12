# ApiKeyDatasets

Indicates which datasets are available and added by default to the address responses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ecad** | **bool** | IE Address File. Eircode Address Database | 
**ecaf** | **bool** | IE Base Address File. Eircode Address File | 
**herewe** | **bool** | Western Europe Address File | [optional] 
**mr** | **bool** | UK Multiple Residence Dataset | 
**nyb** | **bool** | UK Not Yet Built Dataset | 
**paf** | **bool** | UK Main Address File (Postcode Address File) | 
**pafa** | **bool** | UK Property Alias dataset | 
**pafw** | **bool** | UK Welsh Language Dataset | 
**usps** | **bool** | US Address Dataset | 

## Example

```python
from openapi_client.models.api_key_datasets import ApiKeyDatasets

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyDatasets from a JSON string
api_key_datasets_instance = ApiKeyDatasets.from_json(json)
# print the JSON string representation of the object
print(ApiKeyDatasets.to_json())

# convert the object into a dict
api_key_datasets_dict = api_key_datasets_instance.to_dict()
# create an instance of ApiKeyDatasets from a dict
api_key_datasets_from_dict = ApiKeyDatasets.from_dict(api_key_datasets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


