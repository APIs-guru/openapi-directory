# SuppliedData

The data that was initially supplied to check in the batch file 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abn** | **str** | Australian Business Number - MUST be 11 digits. Can be supplied in lieu of the ACN  | 
**acn** | **str** | Australian Company Number on file - MUST be zero left-padded to 9 digits  | 
**company_type** | **str** | The type of company on file. Use the ABR&#39;s company types, as given here:  https://abr.business.gov.au/Documentation/ReferenceData (entity types)  | 
**customer_reference** | **str** | Your reference number for this company | 
**name** | **str** | The name of the company to be verified  | 

## Example

```python
from openapi_client.models.supplied_data import SuppliedData

# TODO update the JSON string below
json = "{}"
# create an instance of SuppliedData from a JSON string
supplied_data_instance = SuppliedData.from_json(json)
# print the JSON string representation of the object
print(SuppliedData.to_json())

# convert the object into a dict
supplied_data_dict = supplied_data_instance.to_dict()
# create an instance of SuppliedData from a dict
supplied_data_from_dict = SuppliedData.from_dict(supplied_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


