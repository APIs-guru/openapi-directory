# PrivateStoreProperties

Describes the json payload on whether or not the private store is enabled for a given tenant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **str** | Indicates private store availability | [optional] 
**name** | **str** | Private Store name | [optional] 

## Example

```python
from openapi_client.models.private_store_properties import PrivateStoreProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateStoreProperties from a JSON string
private_store_properties_instance = PrivateStoreProperties.from_json(json)
# print the JSON string representation of the object
print(PrivateStoreProperties.to_json())

# convert the object into a dict
private_store_properties_dict = private_store_properties_instance.to_dict()
# create an instance of PrivateStoreProperties from a dict
private_store_properties_from_dict = PrivateStoreProperties.from_dict(private_store_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


