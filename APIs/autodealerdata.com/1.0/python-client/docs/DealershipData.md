# DealershipData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | 
**dealer_name** | **str** |  | 
**ids** | **List[int]** |  | 
**state** | **str** |  | 
**zip_code** | **int** |  | 

## Example

```python
from openapi_client.models.dealership_data import DealershipData

# TODO update the JSON string below
json = "{}"
# create an instance of DealershipData from a JSON string
dealership_data_instance = DealershipData.from_json(json)
# print the JSON string representation of the object
print(DealershipData.to_json())

# convert the object into a dict
dealership_data_dict = dealership_data_instance.to_dict()
# create an instance of DealershipData from a dict
dealership_data_from_dict = DealershipData.from_dict(dealership_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


