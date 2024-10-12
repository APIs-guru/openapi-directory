# IdfaDeclarationCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**IdfaDeclarationCreateRequestDataAttributes**](IdfaDeclarationCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppStoreReviewDetailCreateRequestDataRelationships**](AppStoreReviewDetailCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.idfa_declaration_create_request_data import IdfaDeclarationCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of IdfaDeclarationCreateRequestData from a JSON string
idfa_declaration_create_request_data_instance = IdfaDeclarationCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(IdfaDeclarationCreateRequestData.to_json())

# convert the object into a dict
idfa_declaration_create_request_data_dict = idfa_declaration_create_request_data_instance.to_dict()
# create an instance of IdfaDeclarationCreateRequestData from a dict
idfa_declaration_create_request_data_from_dict = IdfaDeclarationCreateRequestData.from_dict(idfa_declaration_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


