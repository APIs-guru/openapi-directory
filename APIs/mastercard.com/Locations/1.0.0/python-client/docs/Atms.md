# Atms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atm** | [**List[Atm]**](Atm.md) |  | [optional] 
**page_offset** | **str** | Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests. | [optional] 
**total_count** | **int** | This is the total number of ATMs that match your criteria. | [optional] 

## Example

```python
from openapi_client.models.atms import Atms

# TODO update the JSON string below
json = "{}"
# create an instance of Atms from a JSON string
atms_instance = Atms.from_json(json)
# print the JSON string representation of the object
print(Atms.to_json())

# convert the object into a dict
atms_dict = atms_instance.to_dict()
# create an instance of Atms from a dict
atms_from_dict = Atms.from_dict(atms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


