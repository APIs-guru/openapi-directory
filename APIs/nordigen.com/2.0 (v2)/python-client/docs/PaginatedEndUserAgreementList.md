# PaginatedEndUserAgreementList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[EndUserAgreement]**](EndUserAgreement.md) |  | [optional] 

## Example

```python
from openapi_client.models.paginated_end_user_agreement_list import PaginatedEndUserAgreementList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedEndUserAgreementList from a JSON string
paginated_end_user_agreement_list_instance = PaginatedEndUserAgreementList.from_json(json)
# print the JSON string representation of the object
print(PaginatedEndUserAgreementList.to_json())

# convert the object into a dict
paginated_end_user_agreement_list_dict = paginated_end_user_agreement_list_instance.to_dict()
# create an instance of PaginatedEndUserAgreementList from a dict
paginated_end_user_agreement_list_from_dict = PaginatedEndUserAgreementList.from_dict(paginated_end_user_agreement_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


