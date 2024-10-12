# TermsData

All term Id response properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | Language of the terms. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**terms** | [**List[TermsInList]**](TermsInList.md) | List of terms. | [optional] 
**tracking_id** | **str** | Tracking Id. | [optional] 

## Example

```python
from openapi_client.models.terms_data import TermsData

# TODO update the JSON string below
json = "{}"
# create an instance of TermsData from a JSON string
terms_data_instance = TermsData.from_json(json)
# print the JSON string representation of the object
print(TermsData.to_json())

# convert the object into a dict
terms_data_dict = terms_data_instance.to_dict()
# create an instance of TermsData from a dict
terms_data_from_dict = TermsData.from_dict(terms_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


