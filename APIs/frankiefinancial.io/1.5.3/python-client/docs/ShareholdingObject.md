# ShareholdingObject

Details of a shareholding as returned from an ASIC report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficially_owned** | **bool** |  | [optional] 
**doc_number** | **str** |  | [optional] 
**doc_number_qualifier** | **str** |  | [optional] 
**fully_paid** | **bool** |  | [optional] 
**members** | **List[str]** |  | [optional] 
**number_held** | **int** |  | [optional] 
**share_capital_class_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.shareholding_object import ShareholdingObject

# TODO update the JSON string below
json = "{}"
# create an instance of ShareholdingObject from a JSON string
shareholding_object_instance = ShareholdingObject.from_json(json)
# print the JSON string representation of the object
print(ShareholdingObject.to_json())

# convert the object into a dict
shareholding_object_dict = shareholding_object_instance.to_dict()
# create an instance of ShareholdingObject from a dict
shareholding_object_from_dict = ShareholdingObject.from_dict(shareholding_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


