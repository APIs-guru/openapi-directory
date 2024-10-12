# Company


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country in which this country is based. | [optional] 
**exchange** | **str** | Exchange this company is traded on. | [optional] 
**industry** | **str** | Industry this country operated/produces in. | [optional] 
**marketcap** | **float** | Market cap as of the last updated timestamp. | [optional] 
**name** | **str** | Name of the company. | [optional] 
**sector** | **str** | Sector that this company is traded in. | [optional] 
**symbol** | **str** | The actual exchange symbol this company is traded under. | [optional] 
**updated** | **datetime** | Last time this company record was updated. | [optional] 

## Example

```python
from openapi_client.models.company import Company

# TODO update the JSON string below
json = "{}"
# create an instance of Company from a JSON string
company_instance = Company.from_json(json)
# print the JSON string representation of the object
print(Company.to_json())

# convert the object into a dict
company_dict = company_instance.to_dict()
# create an instance of Company from a dict
company_from_dict = Company.from_dict(company_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


