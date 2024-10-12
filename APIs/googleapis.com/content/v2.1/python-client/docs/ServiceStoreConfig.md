# ServiceStoreConfig

Stores that provide local delivery. Only valid with local delivery fulfillment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cutoff_config** | [**ServiceStoreConfigCutoffConfig**](ServiceStoreConfigCutoffConfig.md) |  | [optional] 
**service_radius** | [**Distance**](Distance.md) |  | [optional] 
**store_codes** | **List[str]** | A list of store codes that provide local delivery. If empty, then &#x60;store_service_type&#x60; must be &#x60;all_stores&#x60;, or an error is thrown. If not empty, then &#x60;store_service_type&#x60; must be &#x60;selected_stores&#x60;, or an error is thrown. | [optional] 
**store_service_type** | **str** | Indicates whether all stores listed by this merchant provide local delivery or not. Acceptable values are &#x60;all stores&#x60; and &#x60;selected stores&#x60; | [optional] 

## Example

```python
from openapi_client.models.service_store_config import ServiceStoreConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceStoreConfig from a JSON string
service_store_config_instance = ServiceStoreConfig.from_json(json)
# print the JSON string representation of the object
print(ServiceStoreConfig.to_json())

# convert the object into a dict
service_store_config_dict = service_store_config_instance.to_dict()
# create an instance of ServiceStoreConfig from a dict
service_store_config_from_dict = ServiceStoreConfig.from_dict(service_store_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


