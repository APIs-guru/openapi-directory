# DealershipDataPaginated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealers** | [**List[DealershipData]**](DealershipData.md) |  | 
**max_pages** | **int** |  | 
**page** | **int** |  | 

## Example

```python
from openapi_client.models.dealership_data_paginated import DealershipDataPaginated

# TODO update the JSON string below
json = "{}"
# create an instance of DealershipDataPaginated from a JSON string
dealership_data_paginated_instance = DealershipDataPaginated.from_json(json)
# print the JSON string representation of the object
print(DealershipDataPaginated.to_json())

# convert the object into a dict
dealership_data_paginated_dict = dealership_data_paginated_instance.to_dict()
# create an instance of DealershipDataPaginated from a dict
dealership_data_paginated_from_dict = DealershipDataPaginated.from_dict(dealership_data_paginated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


