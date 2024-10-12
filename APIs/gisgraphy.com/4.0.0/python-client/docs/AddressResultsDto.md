# AddressResultsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**q_time** | **int** | how long the query took | [optional] 
**message** | **str** | a message | [optional] 
**num_found** | **int** | how many result found | [optional] 
**parsed_address** | [**Address**](Address.md) |  | [optional] 
**result** | [**List[Address]**](Address.md) |  | [optional] 

## Example

```python
from openapi_client.models.address_results_dto import AddressResultsDto

# TODO update the JSON string below
json = "{}"
# create an instance of AddressResultsDto from a JSON string
address_results_dto_instance = AddressResultsDto.from_json(json)
# print the JSON string representation of the object
print(AddressResultsDto.to_json())

# convert the object into a dict
address_results_dto_dict = address_results_dto_instance.to_dict()
# create an instance of AddressResultsDto from a dict
address_results_dto_from_dict = AddressResultsDto.from_dict(address_results_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


