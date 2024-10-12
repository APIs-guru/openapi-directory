# DcrExchangeConfig

Data Clean Room (DCR), used for privacy-safe and secured data sharing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**single_linked_dataset_per_cleanroom** | **bool** | Output only. If True, when subscribing to this DCR, it will create only one linked dataset containing all resources shared within the cleanroom. If False, when subscribing to this DCR, it will create 1 linked dataset per listing. This is not configurable, and by default, all new DCRs will have the restriction set to True. | [optional] [readonly] 
**single_selected_resource_sharing_restriction** | **bool** | Output only. If True, this DCR restricts the contributors to sharing only a single resource in a Listing. And no two resources should have the same IDs. So if a contributor adds a view with a conflicting name, the CreateListing API will reject the request. if False, the data contributor can publish an entire dataset (as before). This is not configurable, and by default, all new DCRs will have the restriction set to True. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dcr_exchange_config import DcrExchangeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DcrExchangeConfig from a JSON string
dcr_exchange_config_instance = DcrExchangeConfig.from_json(json)
# print the JSON string representation of the object
print(DcrExchangeConfig.to_json())

# convert the object into a dict
dcr_exchange_config_dict = dcr_exchange_config_instance.to_dict()
# create an instance of DcrExchangeConfig from a dict
dcr_exchange_config_from_dict = DcrExchangeConfig.from_dict(dcr_exchange_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


