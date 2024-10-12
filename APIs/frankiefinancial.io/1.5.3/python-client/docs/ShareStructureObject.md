# ShareStructureObject

Describes a collection of shares of a particular type and their attributes, One or more ShareStructures make up a company's shares that are then parcelled out as shareholdings. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_due** | **float** |  | [optional] 
**amount_paid** | **float** |  | [optional] 
**class_code** | **str** |  | [optional] 
**class_title** | **str** |  | [optional] 
**doc_number** | **str** |  | [optional] 
**doc_number_qualifier** | **str** |  | [optional] 
**shares_issued** | **int** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.share_structure_object import ShareStructureObject

# TODO update the JSON string below
json = "{}"
# create an instance of ShareStructureObject from a JSON string
share_structure_object_instance = ShareStructureObject.from_json(json)
# print the JSON string representation of the object
print(ShareStructureObject.to_json())

# convert the object into a dict
share_structure_object_dict = share_structure_object_instance.to_dict()
# create an instance of ShareStructureObject from a dict
share_structure_object_from_dict = ShareStructureObject.from_dict(share_structure_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


