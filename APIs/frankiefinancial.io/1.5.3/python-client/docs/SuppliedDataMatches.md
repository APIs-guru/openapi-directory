# SuppliedDataMatches

The results of the comparison of the supplied data (above) to that found on file with the ABR. If the value is missing, then the comparison was not run. There will likely be an issue highlighted in the issues_list 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_acn** | **bool** | Did the supplied ACN match the ACN on file with the ABR? Only truly relevant if ABN is supplied as well.  | 
**matched_company_type** | **bool** | Did the supplied company type match the company type on file with the ABR?  | 
**matched_name** | **bool** | Did the supplied name match (or closely match) the name on file with the ABR  | 

## Example

```python
from openapi_client.models.supplied_data_matches import SuppliedDataMatches

# TODO update the JSON string below
json = "{}"
# create an instance of SuppliedDataMatches from a JSON string
supplied_data_matches_instance = SuppliedDataMatches.from_json(json)
# print the JSON string representation of the object
print(SuppliedDataMatches.to_json())

# convert the object into a dict
supplied_data_matches_dict = supplied_data_matches_instance.to_dict()
# create an instance of SuppliedDataMatches from a dict
supplied_data_matches_from_dict = SuppliedDataMatches.from_dict(supplied_data_matches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


