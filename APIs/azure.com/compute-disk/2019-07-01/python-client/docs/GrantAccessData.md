# GrantAccessData

Data used for requesting a SAS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** |  | 
**duration_in_seconds** | **int** | Time duration in seconds until the SAS access expires. | 

## Example

```python
from openapi_client.models.grant_access_data import GrantAccessData

# TODO update the JSON string below
json = "{}"
# create an instance of GrantAccessData from a JSON string
grant_access_data_instance = GrantAccessData.from_json(json)
# print the JSON string representation of the object
print(GrantAccessData.to_json())

# convert the object into a dict
grant_access_data_dict = grant_access_data_instance.to_dict()
# create an instance of GrantAccessData from a dict
grant_access_data_from_dict = GrantAccessData.from_dict(grant_access_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


