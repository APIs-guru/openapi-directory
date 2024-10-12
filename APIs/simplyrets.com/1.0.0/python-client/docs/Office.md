# Office

RETS MLS Office

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brokerid** | **str** | Office or brokerage MLS identifier  **Not available for all RETS vendors**  | [optional] 
**contact** | [**ContactInformation**](ContactInformation.md) |  | [optional] 
**name** | **str** | Pimary office name | [optional] 
**serving_name** | **str** | Primary office or brokerage name | [optional] 

## Example

```python
from openapi_client.models.office import Office

# TODO update the JSON string below
json = "{}"
# create an instance of Office from a JSON string
office_instance = Office.from_json(json)
# print the JSON string representation of the object
print(Office.to_json())

# convert the object into a dict
office_dict = office_instance.to_dict()
# create an instance of Office from a dict
office_from_dict = Office.from_dict(office_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


