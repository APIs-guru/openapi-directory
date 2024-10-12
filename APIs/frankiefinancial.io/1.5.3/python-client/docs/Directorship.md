# Directorship


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointed_date** | **str** |  | [optional] 
**company_name** | **str** |  | [optional] 
**company_number** | **str** |  | [optional] 
**company_status** | **str** |  | [optional] 
**function** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.directorship import Directorship

# TODO update the JSON string below
json = "{}"
# create an instance of Directorship from a JSON string
directorship_instance = Directorship.from_json(json)
# print the JSON string representation of the object
print(Directorship.to_json())

# convert the object into a dict
directorship_dict = directorship_instance.to_dict()
# create an instance of Directorship from a dict
directorship_from_dict = Directorship.from_dict(directorship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


