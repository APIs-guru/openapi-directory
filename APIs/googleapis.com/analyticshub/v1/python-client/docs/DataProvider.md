# DataProvider

Contains details of the data provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. Name of the data provider. | [optional] 
**primary_contact** | **str** | Optional. Email or URL of the data provider. Max Length: 1000 bytes. | [optional] 

## Example

```python
from openapi_client.models.data_provider import DataProvider

# TODO update the JSON string below
json = "{}"
# create an instance of DataProvider from a JSON string
data_provider_instance = DataProvider.from_json(json)
# print the JSON string representation of the object
print(DataProvider.to_json())

# convert the object into a dict
data_provider_dict = data_provider_instance.to_dict()
# create an instance of DataProvider from a dict
data_provider_from_dict = DataProvider.from_dict(data_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


